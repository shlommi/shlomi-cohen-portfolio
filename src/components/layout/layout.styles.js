import styled from "styled-components"

export const Main = styled.main`
  display: block;
  width: 100%;
  @media (max-width: 959px) {
    font-size: 16px;
    margin: 6rem auto 4rem auto;
    max-width: 57ch;
  }

  @media (min-width: 960px) {
    margin: 5rem auto 1rem auto;
    font-size: 18px;
    max-width: 50ch;
  }
`
