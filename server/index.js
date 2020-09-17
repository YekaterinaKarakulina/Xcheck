/* eslint-disable prefer-template */
/* eslint-disable camelcase */
const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = require("node-fetch");

const app = express();

app.set("port", (process.env.PORT || 5000));

app.get("/", (req, res) => {
  res.end("<h1>XCheck auth server</h1>");
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Language, Content-Type");
  next();
});

app.post("/authenticate", (req, res) => {
  const { redirect_uri, code } = req.body;

  const data = new FormData();
  data.append("client_id", "3cdd93c64851d7e52a5d");
  data.append("client_secret", "5e7c3eb366144c3855ecd06394de075dd5b72322");
  data.append("code", code);
  data.append("redirect_uri", redirect_uri);

  fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    body: data
  })
    .then(response => response.text())
    .then(paramsString => {
      const params = new URLSearchParams(paramsString);
      const accessToken = params.get("access_token");
      const scope = params.get("scope");
      const tokenType = params.get("token_type");

      return fetch(
        "https://api.github.com/user?access_token=" + accessToken + "&scope=" + scope + "&token_type=" + tokenType
      );
    })
    .then(response => response.json())
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(400).json(error);
    });
});

app.listen(app.get("port"), () => console.log("Listening on " + app.get("port")));
