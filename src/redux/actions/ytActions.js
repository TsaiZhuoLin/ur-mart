// types
export const FETCH_YOUTUBE_API = "FETCH_YOUTUBE_API"
export const SEARCH_KEY_WORD = "SEARCH_KEY_WORD"
export const CACHE_DATA = "CACHE_DATA"
export const PUSH_CACHE_DATA = "PUSH_CACHE_DATA"

// actions
export const fetchYoutubeApi = data => ({
  type: FETCH_YOUTUBE_API,
  payload: data,
})

export const searchKeyWord = data => ({
  type: SEARCH_KEY_WORD,
  payload: data,
})

export const cacheData = data => ({
  type: CACHE_DATA,
  payload: data,
})

export const pushCacheData = data => ({
  type: PUSH_CACHE_DATA,
  payload: data,
})
