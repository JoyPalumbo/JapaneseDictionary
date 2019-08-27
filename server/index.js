const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const words = require('../database-mysql');
const jisho = require('../server/api/jisho');

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.post('/:words', (req, res) => {
  const results = getJapaneseWords(res.params.words);
  console.log('get words');
  results.then((response) => {
    response.data.forEach((word) => {
      let saveMe = {
        english: word.data.senses,
        hirigana: word.data.japanese.reading,
        kanji: word.data.japanese.word,
      };

      // saveMe.saveRepo(saveMe)
    });
  }).catch((error) => {
    console.log(error);
  });
});

app.get('/words', (req, res) => {
  words.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
      console.log("I'ma loser");
    } else {
      res.json(data);
      console.log('it worked!');
    }
  });
});



app.listen(3000, () => {
  console.log('listening on port 3000!');
});
