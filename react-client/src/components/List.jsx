import React from 'react';
import PropTypes from 'prop-types';

import ListWord from './ListWord.jsx';

const List = ({ words }) => (
  <div>
    <h4> List Component </h4>
    There are { words.length } words.
    { words.map(word => <ListWord word={word} />)}
  </div>
);

List.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

export default List;
