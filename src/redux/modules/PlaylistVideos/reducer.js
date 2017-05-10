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
    case "DELETE_PLAYLIST_VIDEO":
      const index = state.videos.findIndex(v => v.id === action.id)
      const newVideosArr = [].concat(state.videos)
      newVideosArr.splice(index, 1)
      return {...state, videos: newVideosArr}
    default:
      return state
  }
}
