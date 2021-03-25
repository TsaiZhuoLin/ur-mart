import styled from "styled-components"

export const StyledSearchBar = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 70px;
  background: #ff5556;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledForm = styled.form`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`

export const StyledSearchButton = styled.button`
  width: 0px;
  height: 0px;
  border: 0;
  outline: 0;
  background: transparent;
  position: absolute;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const StyledSearchIcon = styled.div`
  font-size: 20px;
  color: #fff;
`
