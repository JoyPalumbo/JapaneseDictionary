import React from 'react';
import PropTypes from 'prop-types';

const ListWord = ({ word }) => (
  <div>
    { word.english }
    { word.hirigana }
    { word.kanji }
  </div>
);

ListWord.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListWord;
