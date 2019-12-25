import React from "react"
import styled from "styled-components"
import { white_green, green } from "../theme/_variables"

const Never = () => (
  <Wrapper>
    <h1>
      IT'S <Span>NEVER</Span>
      TO LATE AND YOUR'E
      <Span>NEVER</Span> TOO OLD TO BECOME BETTER.
    </h1>
  </Wrapper>
)

export default Never
const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 90%;
  max-width: 400px;
  padding: 2rem 4rem;

  @media (max-width: 599px) {
    padding: 0 4rem;
  }

  h1 {
    margin-top: 0;
    line-height: 1.5;
  }
`
const Span = styled.span`
  background-color: ${green};
  color: ${white_green};
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
`
