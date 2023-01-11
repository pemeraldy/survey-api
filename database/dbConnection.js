const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect("mongodb://localhost:27017/survey", {
  // { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
});


module.exports = mongoose;