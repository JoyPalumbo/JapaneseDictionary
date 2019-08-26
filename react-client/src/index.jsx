import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
    this.getwords = this.getwords.bind(this);
  }

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
        <h1>JLPT N5 dictionary</h1>
        {/* <p> List of searched words</p> */}
        {/* <p> Top 5 words searched</p> */}
        <List words={words} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
