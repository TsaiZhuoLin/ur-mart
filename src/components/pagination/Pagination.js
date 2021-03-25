// react / components
import React, { useState } from "react"

//redux
import { useDispatch, useSelector } from "react-redux"
import {
  fetchYoutubeApi,
  cacheData,
  pushCacheData,
} from "../../redux/actions/ytActions"

// styled components
import {
  StyledPagination,
  StyledPrevDot,
  StyledPrevPage,
  StyledCurrentPage,
  StyledNextPage,
  StyledNextDot,
  StyledLastPage,
} from "./styledPagination"

// packages / plugins / functions
import seachApiCall from "../../util/seachApiCall"

const Pagination = () => {
  const youtubeData = useSelector(state => state.youtubeData)
  const getKeyWord = useSelector(state => state.searchKeyWord.searchKeyWord)
  const getCacheData = useSelector(state => state.cacheData.cacheData)
  const dispatch = useDispatch()
  const getTotalResults = youtubeData?.pageInfo?.totalResults || 1
  const getResultsPerPage = youtubeData?.pageInfo?.resultsPerPage || 0
  const getLastPage = Math.ceil(getTotalResults / getResultsPerPage) || 1
  const getNextPageToken = youtubeData?.nextPageToken
  const getPrevPageToken = youtubeData?.prevPageToken
  const [currentPage, setCurrentPage] = useState(1)

  const handleClickPage = type => async () => {
    const getPageToken = type === "next" ? getNextPageToken : getPrevPageToken
    const getNewPage = type === "next" ? currentPage + 1 : currentPage - 1
    const checkHasCacheData = getCacheData.find(
      item => item.page === getNewPage,
    )

    if (checkHasCacheData) {
      const getCachePage = checkHasCacheData.page
      const getCachPageItems = checkHasCacheData.items
      setCurrentPage(getCachePage)
      dispatch(pushCacheData(getCachPageItems))
      return
    }
    if (!checkHasCacheData) {
      const resData = await seachApiCall(getKeyWord, getPageToken)
      setCurrentPage(getNewPage)
      dispatch(fetchYoutubeApi(resData.data))
      dispatch(
        cacheData({
          page: getNewPage,
          items: resData.data.items,
          prevPageToken: resData.data.prevPageToken,
          nextPageToken: resData.data.nextPageToken,
        }),
      )
    }
  }

  return (
    <>
      {Object.keys(youtubeData).length > 0 ? (
        <StyledPagination>
          <StyledPrevDot hide={currentPage - 1 < 2}>...</StyledPrevDot>
          <StyledPrevPage
            hide={currentPage - 1 === 0}
            onClick={handleClickPage("prev")}
          >
            {currentPage - 1}
          </StyledPrevPage>
          <StyledCurrentPage>{currentPage}</StyledCurrentPage>
          <StyledNextPage
            hide={currentPage === getLastPage}
            onClick={handleClickPage("next")}
          >
            {currentPage + 1}
          </StyledNextPage>
          <StyledNextDot hide={getLastPage <= 3 && currentPage !== 1}>
            ...
          </StyledNextDot>
          <StyledLastPage hide={getLastPage <= 3}>
            {getLastPage ? getLastPage : ""}
          </StyledLastPage>
        </StyledPagination>
      ) : (
        ""
      )}
    </>
  )
}

export default Pagination
