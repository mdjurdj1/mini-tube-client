import { reset, SubmissionError } from 'redux-form';
import ApiService from '../../../services/Api';


export const addPlaylistVideo = () => {
  return {
    type: 'ADD_PLAYLIST_VIDEO'
  }
}

export const createPlaylistVideo = (playlist_id, video) => {
  return dispatch => {
    dispatch({type: 'PROCESSING_PLAYLIST_VIDEO'})
    return ApiService.post(`/playlists/${playlist_id}`, {video: {name: video.name}} )
    .then(response => {
      dispatch(addPlaylistVideo(response))
    })
    .catch((err) => {
      console.log(err)
      throw new SubmissionError(err)
    })
  }
}

// export const deletePlaylistRequest = (id) => {
//   return dispatch => {
//     dispatch({type: 'PROCESSING_ACTION'})
//     return ApiService.delete(`/playlists/${id}`)
//     .then(response => {
//       dispatch(deletePlaylist(id))
//       console.log('successfully deleted playlist')
//     })
//     .catch((err) => {
//       console.log(err)
//       throw new SubmissionError(err)
//     })
//   }
// }
