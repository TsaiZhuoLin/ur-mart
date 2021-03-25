import {
  FETCH_YOUTUBE_API,
  SEARCH_KEY_WORD,
  CACHE_DATA,
  PUSH_CACHE_DATA,
} from "../actions/ytActions"

export const fetchYoutubeApiReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE_API:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export const searchKeyWordReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_KEY_WORD:
      return {
        ...state,
        searchKeyWord: action.payload,
      }

    default:
      return state
  }
}

export const cacheDataReducer = (
  state = {
    cacheData: [],
  },
  action,
) => {
  if (state.cacheData.length > 10) {
    state.cacheData.shift()
  }

  switch (action.type) {
    case CACHE_DATA:
      return {
        ...state,
        cacheData: [...state.cacheData, action.payload],
      }

    default:
      return state
  }
}

export const pushCachDataReducer = (state = {}, action) => {
  switch (action.type) {
    case PUSH_CACHE_DATA:
      return {
        ...state,
        pushCacheData: action.payload,
      }

    default:
      return state
  }
}
