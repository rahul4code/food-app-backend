// src/database/mongo.js
const mongoose = require("mongoose");
require("dotenv").config();
const path = require('path');
const credentials = path.resolve(__dirname, '../../credentials/X509-cert-6554143162103357350.pem');


async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      tlsCertificateKeyFile: credentials
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to MongoDB");
  }
}

function getCollection(collectionName) {
  return mongoose.connection.db.collection(collectionName);
}

module.exports = { connect, getCollection };
