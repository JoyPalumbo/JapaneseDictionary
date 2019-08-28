import React, { Component } from 'react';
import PropTypes from 'prop-types';


// mysql.connection.connect((err) => {
//   if (err) throw err;
//   mysql.connection.query('SELECT * FROM words', (err, result, fields) => {
//     if (err) throw err;
//     console.log("I am in my listWord", result);
  
//   });
// });
// function ListWord ({ name }) => (
function ListWord() {
  // console.log(word);
  // const names = ["bob", "joe", "tim"];
  return (
    <div>
      <h2>Previous searched words</h2>
      <h2>English: dog, Japanese: 犬(いぬ)</h2>
      <h2>English: cat, Japanese: ねこ</h2>
      {/* { word.english }
    { word.hiragana }
    { word.kanji } */}
    </div>
  );
}


// not sure what .shape is
ListWord.propTypes = {
  word: PropTypes.shape({

  }).isRequired,
};

export default ListWord;
// ReactDOM.render(<App />, document.getElementById('ListWord'));
