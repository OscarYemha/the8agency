const express = require("express");
const parser = require("body-parser");
const db = require("./api/db/db");
const routes = require("./api/Routes");
const app = express();
const { User} = require("./api/Models/index");
const cors = require("cors");
app.use(
    cors({
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
      origin: true,
    }),
  );

app.use(parser.json());
app.use("/api", routes);
app.use("/*", (req, res) => {
  res.redirect("/api");
});

db.sync({ force: false }).then(() => {
    app.listen(8080, () => console.log("Listening on 8080..."));
});

module.exports = app;