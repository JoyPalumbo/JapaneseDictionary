import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      word: event.target.value,
    });
  }

  handleClick() {
    const { onSearch } = this.props;
    const { word } = this.state;

    onSearch(word);
  }

  render() {
    const { word } = this.state;
    //  console.log(word);

    return (
      <div>
        <h4>Get Your N5 Japanese Word</h4>
        <h4> Look at my cute but non-functiong website</h4>
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
