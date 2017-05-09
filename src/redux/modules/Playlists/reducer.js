export default function playlistsReducer(state={loading: false, playlists: []}, action) {
  switch(action.type) {
    // case 'LOADING_VIDS':
    //   return {...state, loading: true}
    case 'LOADING_PLAYLISTS':
      return {...state, loading: true}
    case 'FETCH_PLAYLISTS':
      return {loading: false, playlists: [].concat(action.payload) }
    case 'PROCESSING_CREATE':
      return {...state, loading: true}
    case 'CREATE_REQUEST_SUCCESS':
      return {...state, loading: false, playlists: state.playlists.concat(action.payload)}
    default:
      return state
  }
}
