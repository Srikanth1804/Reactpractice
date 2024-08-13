let DBS = require("../Model/Data.model");

let PD = (req, res) => {
  let { type } = req.query;
  console.log();
  

  DBS.find({ FoodType: type })
    .then((Data) => {
      res.send(Data);
      console.log(Data);
    })
    .catch((e) => {
      console.log("Error to fetch data!");
    });
};

module.exports = PD;
