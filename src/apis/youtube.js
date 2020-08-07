import axios from 'axios'

export default axios.create({
  //we can get our instance of axios so we can do:
  //youtube.get()
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
