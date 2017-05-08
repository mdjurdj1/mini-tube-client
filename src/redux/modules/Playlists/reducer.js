export default function playlistsReducer(state={loading: false, playlists: []}, action) {
  switch(action.type) {
    // case 'LOADING_VIDS':
    //   return {...state, loading: true}
    case 'FETCH_PLAYLISTS':
      return {loading: false, playlists: action.payload}
    default:
      return state
  }
}
