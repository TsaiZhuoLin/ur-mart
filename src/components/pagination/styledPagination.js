import styled from "styled-components"

export const StyledPagination = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div:nth-child(n + 2):nth-child(-n + 4) {
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }

  > div:nth-last-child(1) {
    padding: 0 5px;
    border-radius: 5px;
    width: auto;
    min-width: 30px;
    height: 30px;
    border: 1px solid #ff7975;
  }
`

export const StyledPrevDot = styled.div`
  display: ${props => (props.hide ? "none" : "flex")} !important;
`

export const StyledPrevPage = styled.div`
  display: ${props => (props.hide ? "none" : "flex")} !important;
  &:hover {
    border: 1px solid #ff7975;
  }
`
export const StyledCurrentPage = styled.div`
  background-color: #ff7975;
  color: #fff;
`

export const StyledNextPage = styled.div`
  display: ${props => (props.hide ? "none" : "flex")} !important;
  &:hover {
    border: 1px solid #ff7975;
  }
`

export const StyledNextDot = styled.div`
  display: ${props => (props.hide ? "none" : "flex")} !important;
`

export const StyledLastPage = styled.div`
  display: ${props => (props.hide ? "none" : "flex")} !important;
`
