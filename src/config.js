import Axios from 'axios'

export const API = 'http://api.giphy.com/v1/gifs/'

export const fetchAPI = (value) => {
  return Axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    url: `${API}search?q=${value}&api_key=${process.env.REACT_APP_API_KEY}&limit=24`,
  })
}
