import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ListWord(props) {
  // props.words
  // const words = [
  //   { eng: 'cat', kanji: 'siiudfhsdjf', hiragana: 'piodu' },
  //   { eng: 'dog', kanji: 'sdsfsdfdfhsdjf', hiragana: 'sdfpiodu' },
  //   { eng: 'horse', kanji: 'sdsfsdfdfhsdjf', hiragana: 'sdfpiodu' },
  // ];

  return (
    <div>
      <h2>Previous searched words</h2>
      {props.words.map((word) => {
        return (
          <div>
            <h2>{word.english}</h2>
            <h2>{word.kanji}</h2>
            <h2>{word.hirigana}</h2>
          </div>
        );
      })}
      {/* <h2>English: dog, Japanese: 犬(いぬ)</h2>
      <h2>English: cat, Japanese: ねこ</h2> */}
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
