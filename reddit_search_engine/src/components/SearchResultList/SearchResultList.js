import React from 'react';



export default class SearchResultList extends React.Component {

  render() {

    const { redditSearch } = this.props;

    return(
      <li>
        <p> {redditSearch.data.title} </p>
        {
          redditSearch.data.url ? <p><a href={redditSearch.data.url} target="_blank">{redditSearch.data.url}</a></p> : undefined
        }
        {
          redditSearch.data.ups ? <p>ups: {redditSearch.data.ups}</p> : undefined
        }
      </li>

    );
  }

}

