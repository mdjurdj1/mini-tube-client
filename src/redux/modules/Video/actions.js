import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

// import checkStatus from './fetch/check-status'
// import parseJSON from './fetch/parse-json'
// api keys now working

const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search`
const key = process.env.REACT_APP_YOUTUBE_API_KEY

export function searchVids(query) {

  const params = {
    part: 'snippet',
    q: query,
    key: key,
    type: `video`,
    maxResults: 7,
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

export function getVid(id) {

  const params = {
    part: 'player',
    id: id,
    key: key,
    type: `video`,
    videoEmbeddable: `true`
  }

  return function(dispatch) {
    dispatch({type: 'LOADING_VID'})
    return fetch(`${SEARCH_URL}?${querystring.stringify(params)}`)
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_VID', payload: responseJson.items})
      })
  }

}
