// src/database/mongo.js
const { MongoClient } = require("mongodb");
require("dotenv").config();

const credentials = './credentials/X509-cert-6554143162103357350.pem'; // Path to SSL certificate

let client;

async function connect() {
  try {
    if (!client) {
      client = new MongoClient(process.env.DATABASE_URL, {
        tlsCertificateKeyFile: credentials,
      });
      await client.connect();
    }
    return client.db(process.env.DATABASE_NAME);
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
}

function getCollection(collectionName) {
  if (!client) {
    throw new Error("MongoDB client is not connected");
  }
  return client.db().collection(collectionName);
}

module.exports = { connect, getCollection };
    