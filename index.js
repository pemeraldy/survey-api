const express = require("express");
const User = require("./database/services/user");
const app = express();

// const { getDbConnection, initializeDbConnection } = require("./database/dbConnection");

app.get("/", async (req, res) => {
  try {
    const data = await User.createUser({ username: "Ada", email: "yopee@mme.com", password: "123456" });
    res.status(200).json({ message: "Welcome to Survey Api", data });
  } catch (error) {
    res.status(500).json(error);
  }
});

// initializeDbConnection().then(()=>{
// })
app.listen("8080", () => console.log("Server started"));
