import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';

const List = ({ items }) => (
  <div>
    <h4> List Component </h4>
    There are { items.length } items.
    { items.map(item => <ListItem item={item} />)}
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

export default List;
