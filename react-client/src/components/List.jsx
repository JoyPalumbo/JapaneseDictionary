import React from 'react';
import PropTypes from 'prop-types';

import ListWord from './ListWord.jsx';

const List = ({ items }) => (
  <div>
    <h4> List Component </h4>
    There are { words.length } words.
    { items.map(item => <ListWord item={item} />)}
  </div>
);

List.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

export default List;
