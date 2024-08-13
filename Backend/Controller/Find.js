let DBS = require("../Model/Data.model");

module.exports = (req, res) => {
  let { name, age } = req.body;
  DBS.create({
    NAME: name,
    AGE: age,
  })
    .then(() => {
      res.send("Data Created!");
    })
    .catch((e) => {
      res.send("Data Create Failed!", e);
    });
};
