export default function playlistsReducer(state={loading: false, playlists: []}, action) {
  switch(action.type) {
    // case 'LOADING_VIDS':
    //   return {...state, loading: true}
    case 'LOADING_PLAYLISTS':
      return {...state, loading: true}
    case 'FETCH_PLAYLISTS':
      return {loading: false, playlists: [].concat(action.payload) }
    case 'PROCESSING_ACTION':
      return {...state, loading: true}
    case 'ADD_PLAYLIST':
      return {...state, loading: false, playlists: state.playlists.concat(action.payload)}
    case 'DELETE_PLAYLIST':
      const index = state.playlists.indexOf(action.id)
      const newPlaylist = [].concat(state.playlists)
      newPlaylist.slice(index, 1)
      return {...state, playlists: newPlaylist}
    default:
      return state
  }
}
