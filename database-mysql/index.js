const mysql = require('mysql');
const jisho = require('../server/api/jisho');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'FILL_ME_IN',
  database: 'english_japanese_dictionary',
});

const getTopData = () => {
  connection.query(' select * from words order by id desc limit 5', (err, words) => {
    if (err) {
      throw err;
    } else {
      console.log('できた!');
      console.log(words);
    }
    return words;
  });
};  

const saveData = (data) => {
   let post = { english: data.english, hirigana: data.hiragana, kanji: data.kanji };
  connection.query('INSERT INTO words SET ?', post, (err, words) => {
    if (err) {
      throw err;
    } else {
      console.log("でた!");
    }
  });
};
module.exports.getTopData = getTopData;
module.exports.saveData = saveData;
