// packages / plugins
import axios from "axios"

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const seachApiCall = async (keyword, pageToken) => {
  const resData = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        q: keyword,
        part: "snippet",
        key: YOUTUBE_API_KEY,
        maxResults: 24,
        pageToken: pageToken ? pageToken : "",
      },
    },
  )

  return resData
}

export default seachApiCall
