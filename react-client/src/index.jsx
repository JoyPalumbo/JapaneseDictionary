import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//  import ListWord from './components/ListWord.jsx';

// import List from './components/List.jsx';
// import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';
import ListWord from './components/ListWord.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      hiragana: '',
      kanji: '',
      words: [],
    };
    // this.getwords = this.getwords.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(word) {
    console.log("testing");
    console.log('word was searched:', word);
    // console.log("State word", this.state.word);
    axios.post('/word', { english: word })
      .then((response) => {
        // response.send('words have saved to database');
        const kanji = response.data.data[0].slug;
        const hiragana = response.data.data[0].japanese[0].reading;

        this.setState({
          kanji: kanji,
          hiragana: hiragana,
          word: word,
        });
        console.log('response from front', response.data);
      })
      .catch((error) => {
        console.log(error);
      }); 

      axios.get('/top')
      .then((response) => {
        const words = response.data;
        this.setState({ words: words });
        console.log('response from front', response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  // getwords() {
  //   return axios.get('/words')
  //     .then(response => response.data);
  // }

  render() {
    const { word, hiragana, kanji, words } = this.state;
    // const { english } = this.state;

    return (
      <div>
        <h1>Japanese Dictionary</h1>
        <h1>日本語の事象</h1>
       
        <ListWord words={words} />
       {/* <English english={this.state.word} />
       <Hiragana hiragana={this.state.hiragana}/>
       <Kanji kanji={this.state.kanji}/> */}
      {/* <WordList repos={ this.state.word } />
      <List words={ this.state.word } /> */}
        <Search onSearch={this.handleSearch} />
        <h1>{word}</h1>
        <h1>{kanji}</h1>
        <h1>{hiragana}</h1>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
