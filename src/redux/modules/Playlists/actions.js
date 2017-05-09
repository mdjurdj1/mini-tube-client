import fetch from 'isomorphic-fetch'
import { reset, SubmissionError } from 'redux-form';
import ApiService from '../../../services/Api';

export const getPlaylists = () => {
  return dispatch => {
    dispatch({type: 'LOADING_PLAYLISTS'});
    return ApiService.get(`/playlists`)
      .then(response => {
        const playlists = response;
        dispatch({type: 'FETCH_PLAYLISTS', payload: playlists })
      })
      .catch((err) => {
        console.log(err)
        throw new SubmissionError(err)
      })
  }
}
