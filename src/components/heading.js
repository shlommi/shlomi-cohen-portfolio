import React from "react"
import styled from "styled-components"
import { font_family_heading_black } from "../theme/_variables"

const Heading = ({ text }) => {
  return <H1>{text}</H1>
}

export default Heading
const H1 = styled.h1`
  width: 100%;
  margin-top: 5rem;
  line-height: 1.1;
  font-family: ${font_family_heading_black};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ align }) => align};
`
