import React from "react"
import styled from "styled-components"
import { font_black } from "../theme/_variables"

const Heading = ({ text }) => {
  return <H1>{text}</H1>
}

export default Heading
const H1 = styled.h1`
  font-size: 155%;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  margin: 0.5rem 0px 0.25rem;
  font-family: ${font_black};
`
