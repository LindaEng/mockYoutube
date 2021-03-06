import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = ''

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        type:'video',
        maxResults: 5,
        key: KEY
      }
    })
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    this.setState({ ...this.state, selectedVideo: video})
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}
export default App


// onTermSubmit = term => {
//   youtube.get("/search", {
//     params: {
//       q: term,
//       part: "snippet",
//       type: 'video',
//       maxResults: 5,
//       key: KEY
//     }
//   });
// };
