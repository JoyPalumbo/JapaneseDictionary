import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListWord = ({ word }) => (
  <div>
    { word.english }
    { word.hirigana }
    { word.kanji }
  </div>
);



//not sure what .shape is
ListWord.propTypes = {
  word: PropTypes.shape({

  }).isRequired,
};

export default ListWord;
