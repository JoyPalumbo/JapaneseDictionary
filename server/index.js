const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var mysql = require("mysql");
const items = require('../database-mysql');

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
