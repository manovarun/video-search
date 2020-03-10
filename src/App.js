import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import YouTube from './apis/YouTube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount = () => {
    this.onTermSubmit('bmw');
  };

  onTermSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
