const express = require("express");
const path = require("path");

const app = express();

app.set("port", (process.env.PORT || 5000));
app.use("/", express.static(path.join(__dirname, "public")));
app.listen(app.get("port"), () => console.log("Listening on Port", app.get("port")));
