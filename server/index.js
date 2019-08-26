const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let mysql = require('mysql');
const words = require('../database-mysql');

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.post('/words', (req, res) => {
  var results = getJapaneseWords(res.params.words);
  console.log("get words");
  results.then((response) => {

    response.data.forEach(function(word) {
      var saveMe = {
        english: word.data.senses,
        hirigana: word.data.japanese.reading,
        kanji: word.data.japanese.word
      }

      // saveMe.saveRepo(saveMe)
    })
  }).catch(function(error){
    console.log(error);
  })
}

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
