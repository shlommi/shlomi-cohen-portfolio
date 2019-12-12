import React from "react"
import styled from "styled-components"
import { font_family_heading_black } from "../theme/_variables"

const Heading = ({ text }) => {
  return (
    <Wrapper>
      <h1>{text}</h1>
    </Wrapper>
  )
}

export default Heading

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 5rem;
  h1 {
    line-height: 1.1;
    font-family: ${font_family_heading_black};
    font-size: 2rem;
  }
`
