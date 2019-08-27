import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      english: '',
    };
    // this.getwords = this.getwords.bind(this);
     this.handleSearch = this.handleSearch.bind(this);
    //  this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(word) {
    console.log(`${word} was searched`);
    axies.post('/word', {
      english: {$english},
      hirigana: {$hirigana},
      kanji: {$kanji},
    })
      .then((response) => {
        response.semt('words have saved to database');
        console.log('resposnse');
      })
      .catch((error) => {
        response.status(400).send('unable to save to database');
        console.log(error);
      }); 
  }

  // handleChange(e) {
  //   this.setState({
  //     english: e.target.value,
  //   });
  // }

  // handleClick() {
  //    const { onSearch } = this.props;
  //   const { english } = this.state;

  //   onSearch(english);
  // }


  //have to fix this because I commented out the this.getwords above
  // componentDidMount() {
  //   this.getwords()
  //     .then((data) => {
  //       this.setState({
  //         words: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // getwords() {
  //   return axios.get('/words')
  //     .then(response => response.data);
  // }

  render() {
     const { word } = this.state;
    // const { english } = this.state;

    return (
    //   return (
      <div>
       <h1>Jisho Dictionary</h1>
       //figure out what would "words"
      <WordList repos={words} />
      <Search onSearch={this.handleSearch} />
     <div>
    //   <h1>JLPT N5 dictionary</h1>
    //   {/* <p> List of searched words</p> */}
    //   {/* <p> Top 5 words searched</p> */}
    //   <List words={words} />
    // </div>
    // );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
