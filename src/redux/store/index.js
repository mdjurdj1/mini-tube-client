import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import auth from '../modules/Auth/reducer'
import videos from '../modules/Video/reducer'
import playlists from '../modules/Playlists/reducer'

const reducers = combineReducers({
  form,
  auth,
  playlists,
  videos
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
