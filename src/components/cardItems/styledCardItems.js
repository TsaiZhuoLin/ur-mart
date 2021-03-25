import styled from "styled-components"

const CardItemsDeskTopWidth = "320px"

export const StyledCardItems = styled.a`
  width: ${CardItemsDeskTopWidth};
  height: ${`calc(${CardItemsDeskTopWidth} / 1.4545)`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: #333;

  @media only screen and (max-width: 660px) {
    width: ${`calc((100vw - 10px) / 2)`};
    height: ${`calc((100vw - 10px) / 2 /1.4545)`};
  }
`
export const StyledCardImg = styled.img`
  width: 100%;
  height: ${`calc(${CardItemsDeskTopWidth} / 1.777)`};

  @media only screen and (max-width: 660px) {
    height: ${`calc(((100vw - 10px) / 2) / 1.777)`};
  }
`

export const StyledTitle = styled.div`
  margin: auto 0;
  align-self: flex-start;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;

  @media only screen and (max-width: 660px) {
    font-size: 0.9em;
  }

  @media only screen and (max-width: 450px) {
    font-size: 0.6em;
  }
`
