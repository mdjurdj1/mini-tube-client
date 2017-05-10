export default function playlistVideosReducer(state={loading: false}, action) {
  switch(action.type) {
    // case 'LOADING_VIDS':
    //   return {...state, loading: true}
    case "LOADING_PLAYLIST_VIDEOS":
      return {...state, loading: true}
    default:
      return state
  }
}
