let Express = require("express");
let App = Express();
let Mongoose = require("mongoose");
let Cors = require("cors");
const PD = require("./Controller/Search");
const Find = require("./Controller/Find");
App.use(Cors());
App.use(Express.json());

Mongoose.connect("mongodb://127.0.0.1:27017/Practice?")
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((e) => {
    console.log("Failed to DB connect!");
  });

App.post("/search", Find);
App.listen(7000, () => {
  console.log("http://localhost:7000");
});
