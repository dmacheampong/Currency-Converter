const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

admin.initializeApp();


const baseURL = "https://api.apilayer.com/fixer/latest?base=USD";


app.use(cors());

app.get("/", (req, res) => {
  res.set("Cache-Control", "public, max-age=86400, s-maxage=86400");
  const options = {
    url: baseURL,
    headers: {
      "apikey": process.env.FIXER_API_KEY,
    },
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});

exports.app = functions.https.onRequest(app);
