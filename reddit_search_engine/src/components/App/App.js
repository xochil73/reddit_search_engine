import React from 'react';
import superagent from 'superagent';
import SearchResultList from '../SearchResultList/SearchResultList';
import SearchForm from '../SearchForm/SearchForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.redditSearch = [];


  }

  async componentDidMount() {
    await this.loadRedditList();
  }

  loadRedditList = (search, limit) => {

  const REDDIT_API = 'https://www.reddit.com/r/${topic}.json?limit=${limit}';

  return superagent.get(REDDIT_API)
    .then(response => {
      this.setState({
        redditSearch: response.body.data.children

      });
      console.log(response);
    })
    .catch(console.error);
  };

  render() {
    return(
      <main>
        <SearchForm
          loadRedditList={this.loadRedditList}
          />
        <ul>
          {
        this.state.redditSearch.map((current) =>
           <SearchResultList
            redditSearch={current}
           />
        )


          }
        </ul>
      </main>

    );
  }
}

