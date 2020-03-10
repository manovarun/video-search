import axios from 'axios';

const KEY = 'AIzaSyDElB1Q3PQkqkqxEIGCZ32rNvQLwZCh4l0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
