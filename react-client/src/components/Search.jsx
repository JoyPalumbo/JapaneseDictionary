import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   word: '',
    // };
    
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      word: e.target.value,
    });
  }

  handleClick() {
    const { onSearch } = this.props;
    const { word } = this.state;

    onSearch(word);
  }

  render() {
    const { word } = this.state;

    return (
      <div>
        <h4>Get Japanese Word</h4>
        Enter an English word: <input value={ word } onChange={this.handleChange} />
        <button onClick={this.handleClick} type="button">Submit</button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;