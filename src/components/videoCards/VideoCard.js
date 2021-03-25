// react / components
import React, { useState, useEffect } from "react"
import CardItems from "../cardItems/CardItems"

//redux
import { useSelector } from "react-redux"

// styled components
import { StyledVideoCard } from "./styledVideoCards"

const VideoCard = () => {
  const youtubeData = useSelector(state => state.youtubeData)
  const getPushedCacheData = useSelector(
    state => state.pushCacheData.pushCacheData,
  )
  const [cardItems, setCardItems] = useState([])

  useEffect(() => {
    if (Object.keys(youtubeData).length > 0) {
      setCardItems(youtubeData.items)
    }
  }, [youtubeData])

  useEffect(() => {
    if (getPushedCacheData && Object.keys(getPushedCacheData).length > 0) {
      setCardItems(getPushedCacheData)
    }
  }, [getPushedCacheData])

  return (
    <StyledVideoCard>
      {cardItems.map((item, index) => {
        return <CardItems key={index} itemData={item} />
      })}
    </StyledVideoCard>
  )
}

export default VideoCard
