// react / components
import React, { useRef } from "react"

//redux
import { useDispatch } from "react-redux"
import {
  searchKeyWord,
  fetchYoutubeApi,
  cacheData,
} from "../../redux/actions/ytActions"

// styled components
import {
  StyledSearchBar,
  StyledInput,
  StyledForm,
  StyledSearchIcon,
  StyledSearchButton,
} from "./styledSearchBar"

// packages / plugins / functions
import seachApiCall from "../../util/seachApiCall"

const SearchBar = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    const getInputValue = inputRef.current.value
    const resData = await seachApiCall(getInputValue)
    // dispatch resData to store
    dispatch(fetchYoutubeApi(resData.data))

    // dispatch search key word to store
    dispatch(searchKeyWord(getInputValue))

    // dispatch cacheData to store
    dispatch(
      cacheData({
        page: 1,
        items: resData.data.items,
        prevPageToken: resData.data.prevPageToken,
        nextPageToken: resData.data.nextPageToken,
      }),
    )
  }

  return (
    <StyledSearchBar>
      <StyledForm onSubmit={e => handleSubmit(e)}>
        <StyledInput ref={inputRef} type="text" placeholder="Enter Key Words" />
        <StyledSearchButton type="submit">
          <StyledSearchIcon className="fas fa-search" />
        </StyledSearchButton>
      </StyledForm>
    </StyledSearchBar>
  )
}

export default SearchBar
