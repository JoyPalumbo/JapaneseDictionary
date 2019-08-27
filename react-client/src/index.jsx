import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    };
    // this.getwords = this.getwords.bind(this);
     this.handleSearch = this.handleSearch.bind(this);
      // this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(word) {
    console.log('word was searched:', word);
    // console.log("State word", this.state.word);
    axios.post('/word', { english: word })
      .then((response) => {
        // response.send('words have saved to database');

        console.log('response from front', response.data);
      })
      .catch((error) => {
        // .status(400).send('unable to save to database');
        console.log(error);
      }); 
  }

  // getwords() {
  //   return axios.get('/words')
  //     .then(response => response.data);
  // }

  render() {
     const { word } = this.state;
    // const { english } = this.state;

    return (
      <div>
       <h1>Jisho Dictionary</h1>
       <h1>日本語の事象</h1>
       
      {/* <WordList repos={words} /> */}
      <Search onSearch={this.handleSearch} />
     </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
