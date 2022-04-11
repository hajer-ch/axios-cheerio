const express = require('express');// import express module
const app = express();// create Express application
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post("/searchCompany", (req, res) => {
  console.log("Here company details ", req.body.company);
  company.find({ company: req.body.company }).then((result) => {
    res.status(200).json({
      company: result,
    });
  });
});

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function (browser) {
  const page = await browser.newPage();
  await page.goto('https://www.moneyhouse.ch/fr/company/bmw-finanzdienstleistungen-schweiz-ag-2599435461/');

  // Targeting the DOM Nodes that contain the Digimon names
  const company = await page.$$eval('body > div.container > div.content.content-subheader > header > div > div > div.l-grid > div.l-grid-cell.l-three-fifths.l-tablet-one-whole', function (digimons) {
    // Mapping each Digimon name to an array
    return digimons.map(function (digimon) {
      return digimon.innerText;
    });

  });
  console.log(company);
  

  // Closing the Puppeteer controlled headless browser
  await browser.close();
  
});


module.exports = app;


