import fetch from 'isomorphic-fetch'
import { reset, SubmissionError } from 'redux-form';
import ApiService from '../../../services/Api';

export const getPlaylists = () => {
  return dispatch => {
    dispatch({type: 'FETCH_PLAYLISTS'});
    return ApiService.get(`/playlists`)
      .then(response => {
        const { playlists } = response;
      })
      .catch((err) => {
        console.log(err)
        throw new SubmissionError(err)
      })
  }
}
