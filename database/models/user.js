const { mongoose } = require("../dbConnection");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  surveys: {
    type: Array,
  },
});

mongoose.model("users", UserSchema);

module.exports = mongoose.model("users");
