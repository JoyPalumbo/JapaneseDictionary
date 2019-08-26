const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'FILL_ME_IN',
  database: 'english_japanese_dictionary',
});

const selectAll = (callback) => {
  connection.query('SELECT * FROM words', (err, words) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, words);
    }
  });
};

module.exports.selectAll = selectAll;
