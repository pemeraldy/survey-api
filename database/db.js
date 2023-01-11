const { MongoClient } = require("mongodb");


let client
const initializeDbConnection = async () => {
  client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const getDbConnection = (dbName) => {
  let db = client.db(dbName);
  return db;
};

module.exports = {
  getDbConnection,
  initializeDbConnection,
};
