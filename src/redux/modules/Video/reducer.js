export default function videosReducer(state={loading: false, links: []}, action) {
  switch(action.type) {
    case 'LOADING_VIDS':
      return {...state, loading: true}
    case 'FETCH_VIDS':
      return {loading: false, links: action.payload}
    default:
      return state
  }
}
