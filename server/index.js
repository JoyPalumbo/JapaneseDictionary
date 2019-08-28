 const express = require('express');
// not sure if router is correct way
// const { Router } = require('express');
// const Words = Router();

const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const words = require('../database-mysql');
const axios = require('axios');

//  import axios from 'axios';

//  const jisho = require('../server/api/jisho');

//STEPS

//1. POST request to get word from client
//2.route that word to the axios get request for the API request
//3. Not sure about step 3, in fullstack we immediately saved that info
    //to the database but for this, I should be able to send it straight
    //back to the client
//4. I do need to save the info to the database though at this point
//5. After the data is saved, we will retrieve the data from the database
  //to render a list of searched words.




const app = express();

// UNCOMMENT FOR REACT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../react-client/dist')));
//if you're getting indefined fromclient search/post requests it may be due
//to a lack of json parsing
// need to set up a model and then a new instance of a model
//using variable Word

const getJapaneseWords = (word) => {
  const options = {
    type: "GET",
    url: `https://jisho.org/api/v1/search/words?keyword=${word}`,
  };

return axios.get(`https://jisho.org/api/v1/search/words?keyword=${word}`);

  // const saveWord = (param) => {
  //   //this will access the model we create
  //   const newWord = new Word ({
  //     //bla bla fill me in with the data you want back
  //     //from your api
  //   })
    //may have to change .save method. This might be specific to mongodb
    //find method to save for mysql

//example from W3 on how to save info to mysql
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

    // return Word.save();
  // }

  // http client that allows us to make http requests and returns a promise
  // return axios(options, {
  //   params: {
  //     english: word.senses,
  //     hirigana: word.reading,
  //     kanji: word.word
  //   },
  // });
};

app.post('/word', (req, res) => {
  // /:word the semicolon is used for patch requests to store to database
  console.log('red word', req.body.english);
  getJapaneseWords(req.body.english)
  // console.log('get words');
  .then((response) => {
    console.log(response);
    res.send(response.data);
  //   response.forEach((word) => {
  //     let saveMe = {
  //       english: word.data.senses,
  //       hirigana: word.data.japanese.reading,
  //       kanji: word.data.japanese.word,
  //     };

      // saveMe.saveRepo(saveMe)
  //   });
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

//THIS gets the word the user enters in the website and inputs it
//into the api request

// Words.post('/', (req, res) => {
//   //change function
//   getJapaneseWords();
//   //change
//   // saveRepo();
//   console.log("hello, meep");
//   res.send(200);
// });

// module.exports = {
//   Words,
// };

app.listen(3000, () => {
  console.log('listening on port 3000!');
});

