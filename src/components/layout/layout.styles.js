import styled from "styled-components"

export const Main = styled.main`
  display: block;
  max-width: 57ch;
  @media (max-width: 959px) {
    font-size: 16px;
    margin: 4rem auto 4rem auto;
  }

  @media (min-width: 960px) {
    margin: 0rem auto 1rem auto;
    font-size: 18px;
  }
`
