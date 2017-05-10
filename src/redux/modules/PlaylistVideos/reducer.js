export default function playlistVideosReducer(state={loading: false, videos: []}, action) {
  switch(action.type) {
    // case 'LOADING_VIDS':
    //   return {...state, loading: true}
    case "LOADING_PLAYLIST_VIDEOS":
      return {...state, loading: true}
    case "ADD_PLAYLIST_VIDEO":
      return state
    case "FETCH_PLAYLIST_VIDEOS":
      return {
        ...state,
        loading: false,
        videos: [].concat(action.payload)
      }
    default:
      return state
  }
}
