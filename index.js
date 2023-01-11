const express = require("express");
const app = express()

const { getDbConnection, initializeDbConnection } = require("./database/db");


app.get('/', async (req, res) => {
  const db = getDbConnection('testing-connect')
  const data = await db.collection('meme').insertOne({
    name: 'Ada',
    age: 23
  })
  res.status(200).json({message: "Welcome to Survey Api", data})
})

initializeDbConnection().then(()=>{
  app.listen('8080', () => console.log('Server started'))
})