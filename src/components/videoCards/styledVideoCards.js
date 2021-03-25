import styled from "styled-components"

export const StyledVideoCard = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 660px) {
    gap: 10px;
  }
`
