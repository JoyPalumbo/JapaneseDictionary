
import React, { Componant } from 'react'
const axios = require('axios');

class Search extends Component {
  state = {
    query: '',
    results: {}
  }
}

// may need to change the format of "word"

const getJapaneseWords = (word) => {

  const options = {
    url: `https://jisho.org/api/v1/search/words`,
    api_key: { word }
  }
}

//http client that allows us to make http requests and returns a promise
return axios(options, {
  params: {
    word,
  }
});


module.exports.getJapaneseWords = getJapaneseWords;