const express = require('express');// import express module
const app = express();// create Express application
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require("body-parser");
const { json } = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/searchCompany", (req, res) => {
    console.log("Here company details ", req.body.company);
  });
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });


 const url = 'https://www.moneyhouse.ch/fr';
  axios(url)
  .then(response =>{
      const resp = response.data
      console.log(resp);
      const $ = cheerio.load(resp);
      $('.js-instant-search search ui-autocomplete-input', resp).each(function(){
          $(this).text();
      })
  })
  

  module.exports = app;