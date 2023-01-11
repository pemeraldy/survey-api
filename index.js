const express = require("express");
const app = express()


app.get('/', (req, res) => {
  res.status(200).json({message: "Welcome to Survey Api"})
})

app.listen('8080', () => console.log('Server started'))