import { combineReducers } from "redux"
import {
  fetchYoutubeApiReducer,
  searchKeyWordReducer,
  cacheDataReducer,
  pushCachDataReducer,
} from "./reducers/ytReducer"

const rootReducer = combineReducers({
  youtubeData: fetchYoutubeApiReducer,
  searchKeyWord: searchKeyWordReducer,
  cacheData: cacheDataReducer,
  pushCacheData: pushCachDataReducer,
})

export default rootReducer
