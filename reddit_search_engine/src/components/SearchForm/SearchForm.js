import React from 'react';

export default class SearchForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
    this.state.searchTopic = '';
    this.state.searchLimit = 1;


  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.loadRedditList(this.state.searchTopic, this.state.searchLimit);
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="searchTopic">Search Topic</label>
       <input
         name="searchTopic"
         value={this.state.searchTopic}
         onChange={this.handleChange}
         type="text"/>

        <label htmlFor="searchLimit">Number to Search For (1-99)</label>
        <input
          name="searchLimit"
          value={this.state.searchLimit}
          onChange={this.handleChange}
          type="number"
          min="1"
          max="99"
        />

        <button type="submit"> Search Reddit</button>
      </form>
  )}
}
