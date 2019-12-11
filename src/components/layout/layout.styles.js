import styled from "styled-components"

export const Main = styled.main`
  @media (max-width: 959px) {
    display: block;
    max-width: 57ch;
    margin: 2rem auto 4rem;
    font-size: 16px;
  }

  @media (min-width: 960px) {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 2rem;
    grid-template: repeat(2, auto) / 1fr 1fr;
    max-width: 100%;
    width: 960px;
    column-gap: 2rem;
    margin: 0 auto 1rem;
    font-size: 18px;
  }
`
