// react / components
import React from "react"
import SearchBar from "../searchBar/SearchBar"
import VideoCard from "../videoCards/VideoCard"
import Pagination from "../pagination/Pagination"

// styled components
import { StyledApp } from "./styledApp"

function App() {
  return (
    <StyledApp>
      <SearchBar />
      <VideoCard />
      <Pagination />
    </StyledApp>
  )
}

export default App
