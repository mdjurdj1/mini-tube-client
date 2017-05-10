export default function playlistsReducer(state={loading: false, playlists: []}, action) {
  switch(action.type) {
    // case 'LOADING_VIDS':
    //   return {...state, loading: true}
    case 'LOADING_PLAYLISTS':
      return {...state, loading: true}
    case 'LOADING_PLAYLIST':
      return {...state, loading: true}
    case 'FETCH_PLAYLISTS':
      return {...state, loading: false, playlists: [].concat(action.payload) }
    case 'FETCH_PLAYLIST':
      return {...state, loading: false, playlist: action.payload }
    case 'PROCESSING_ACTION':
      return {...state, loading: true}
    case 'ADD_PLAYLIST':
      return {...state, loading: false, playlists: state.playlists.concat(action.payload)}
    case 'DELETE_PLAYLIST':
      const index = state.playlists.findIndex(p => p.id === action.id)
      const newPlaylist = [].concat(state.playlists)
      newPlaylist.splice(index, 1)
      return {...state, playlists: newPlaylist}
    case 'RESET_PLAYLIST':
      return {...state, playlist: []}
    default:
      return state
  }
}
