import React from 'react';
import PropTypes from 'prop-types';

const WordList = ({ words }) => (
  <div>
    <h4>Word List Component</h4>
    Top { words.repos.length } repos by user name.
  </div>
);

WordList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
  })).isRequired,
};

export default WordList;
