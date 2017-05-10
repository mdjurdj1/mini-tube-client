import { reset, SubmissionError } from 'redux-form';
import ApiService from '../../../services/Api';


export const addPlaylistVideo = () => {
  return {
    type: 'ADD_PLAYLIST_VIDEO'
  }
}

export const deletePlaylistVideo = (id) => {
  return {
    type: 'DELETE_PLAYLIST_VIDEO',
    id: id
  }
}

export const createPlaylistVideo = (playlist_id, video) => {
  let data = {video: {name: video.snippet.title, videoId: video.id.videoId} }
  return dispatch => {
    dispatch({type: 'PROCESSING_PLAYLIST_VIDEO'})
    return ApiService.post(`/playlists/${playlist_id}/videos`, data)
    .then(response => {
      dispatch(addPlaylistVideo(response))
    })
    .catch((err) => {
      console.log(err)
      throw new SubmissionError(err)
    })
  }
}

export const getPlaylistVideos = (id) => {
  return dispatch => {
    dispatch({type: 'LOADING_PLAYLIST_VIDEOS'});
    return ApiService.get(`/playlists/${id}/videos`)
      .then(response => {
        const videos = response;
        dispatch({type: 'FETCH_PLAYLIST_VIDEOS', payload: videos })
      })
      .catch((err) => {
        console.log(err)
        throw new SubmissionError(err)
      })
  }
}

export const deleteVid = (playlist_id, video_id) => {
  return dispatch => {
    dispatch({type: 'PROCESSING_ACTION'})
    return ApiService.delete(`/playlists/${playlist_id}/videos/${video_id}`)
    .then(response => {
      dispatch(deletePlaylist(id))
      console.log('successfully deleted video')
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
