import { reset, SubmissionError } from 'redux-form';
import ApiService from '../../../services/Api';


export const createPlaylistVideo = (name) => {
  return dispatch => {
    dispatch({type: 'PROCESSING_PLAYLIST_VIDEO'})
    return ApiService.post(`/playlists`, {playlist: {name: name}} )
    .then(response => {
      dispatch(addPlaylist(response))
    })
    .catch((err) => {
      console.log(err)
      throw new SubmissionError(err)
    })
  }
}

export const deletePlaylistRequest = (id) => {
  return dispatch => {
    dispatch({type: 'PROCESSING_ACTION'})
    return ApiService.delete(`/playlists/${id}`)
    .then(response => {
      dispatch(deletePlaylist(id))
      console.log('successfully deleted playlist')
    })
    .catch((err) => {
      console.log(err)
      throw new SubmissionError(err)
    })
  }
}
