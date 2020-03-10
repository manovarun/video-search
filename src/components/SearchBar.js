import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className='ui segment search-bar'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              name='term'
              onChange={this.onInputChange}
              placeholder='Search for Videos...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
