// react / components
import React from "react"

// styled components
import { StyledCardItems, StyledCardImg, StyledTitle } from "./styledCardItems"

const CardItems = ({ itemData }) => {
  const {
    thumbnails: { medium },
    title,
  } = itemData.snippet

  const {
    id: { videoId },
  } = itemData

  return (
    <StyledCardItems
      href={`https://www.youtube.com/watch?v=${videoId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <StyledCardImg src={medium.url} />
      <StyledTitle>{title}</StyledTitle>
    </StyledCardItems>
  )
}

export default CardItems
