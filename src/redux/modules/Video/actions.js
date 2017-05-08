import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

// import checkStatus from './fetch/check-status'
// import parseJSON from './fetch/parse-json'

const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search`
const key = `AIzaSyB1E_RNaA_yrhOFr0qYG7nzghhSddiY750`

export function searchVids(query) {

  const params = {
    part: 'snippet',
    q: query,
    key: key,
    type: `video`,
    maxResults: 5,
    videoEmbeddable: `true`
  }

  return function(dispatch) {
    dispatch({type: 'LOADING_VIDS'})
    return fetch(`${SEARCH_URL}?${querystring.stringify(params)}`)
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_VIDS', payload: responseJson.items})
      })
  }
}
