import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//may not need prop-types
import PropTypes from 'prop-types';

import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
    this.getwords = this.getwords.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

// handleSearch(english) {
//   console.log(`${english} was searched`);
//   axies.post('/english', {
//     english: {$english},
//     hirigana: {$hirigana},
//     kanji: {$kanji},
//   })
//   .then(function (response){
//     response.semt("words have saved to database");
//     console.log("resposnse");
//   })
//   .catch(function (error){
//     response.status(400).send("unable to save to database");
//     console.log(error);
//   })
// }

render() {
  //may need to change dictionary.  Not sure what this will be yet
  const { dictionary } = this.state;

  return (
    <div>
      <h1>English Japanese Dictionary</h1>
      //line 42 will probably need to be changed
      <DictionaryList dictionary={dicitionary} />
      <Search onSearch={this.handleSearch} />
    </div>
  )
}

// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       english: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
// }

// handleChange(e) {
//   this.setState({
//     english: e.target.value,
//   });
// }

// handleClick(){
//   const { onSearch } = this.props;
//   const { english } = this.state;

//   onSearch(english);
// }

// render() {
//   const { english } = this.state;

//   return (
//     <div> 
//       <h4>Add more vocab words!</h4>
//       Enter an english word <input value= {english} onChange={this.handleChange} />
//       <button onClick={this.handleClick} type="button"> Search for word</button>
//     </div>
//   );
// } 


  componentDidMount() {
    this.getwords()
      .then((data) => {
        this.setState({
          words: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getwords() {
    return axios.get('/words')
      .then(response => response.data);
  }

  render() {
    const { words } = this.state;

    return (
      <div>
        <h1>Item List</h1>
        <List words={words} />
      </div>
    );
  }
}

// Search.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };

// export default Search;

ReactDOM.render(<App />, document.getElementById('app'));
