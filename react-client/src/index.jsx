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
        <h1>JLPT N5 dictionary</h1>
        {/* <p> List of searched words</p> */}
        {/* <p> Top 5 words searched</p> */}
        <List items={items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
