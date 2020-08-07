import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyDe7lk9Mg5AsmyiHZ_ygv_1YVHvProJuwo'

class App extends React.Component {
  state = {
    videos: []
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
  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        I have {this.state.videos.length} videos
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
