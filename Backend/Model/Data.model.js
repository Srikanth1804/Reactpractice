let Mongoose = require("mongoose");

let Userschema = new Mongoose.Schema({
  NAME: {
    type: String,
  },
  AGE: {
    type: Number,
  },
});
let DBS = Mongoose.model("UserData", Userschema);

module.exports = DBS;
