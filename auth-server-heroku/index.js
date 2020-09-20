/* eslint-disable prefer-template */
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
  const { redirectUri, code } = req.body;

  const data = new FormData();
  data.append("client_id", process.env.CLIENT_ID);
  data.append("client_secret", process.env.CLIENT_SECRET);
  data.append("code", code);
  data.append("redirect_uri", redirectUri);

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
