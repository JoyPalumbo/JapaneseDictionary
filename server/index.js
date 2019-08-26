const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('../database-mysql');

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(path.join(__dirname, '../angular-client')));
// app.use(express.static(path.join(__dirname, '../node_modules')));

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
