import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.getItems = this.getItems.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

handleSearch(english) {
  console.log(`${english} was searched`);
  axies.post('/english', {
    english: {$english},
    hirigana: {$hirigana},
    kanji: {$kanji},
  })
  .then(function (response){
    response.semt("items have saved to database");
    console.log("resposnse");
  })
  .catch(function (error){
    response.status(400).send("unable to save to database");
    console.log(error);
  })
}

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

  componentDidMount() {
    this.getItems()
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getItems() {
    return axios.get('/items')
      .then(response => response.data);
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Item List</h1>
        <List items={items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
