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

export const addPlaylist = (playlist) => {
  return {
    type: 'ADD_PLAYLIST',
    payload: playlist.playlist
  };
}

export const deletePlaylist = (id) => {
  return {
    type: 'DELETE_PLAYLIST',
    id: id
  }
}

export const createPlaylistRequest = (name) => {
  return dispatch => {
    dispatch({type: 'PROCESSING_ACTION'})
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
      dispatch(deletePlaylist(response))
    })
    .catch((err) => {
      console.log(err)
      throw new SubmissionError(err)
    })
  }
}
