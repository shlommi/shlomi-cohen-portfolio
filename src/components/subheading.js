import React from "react"
import styled from "styled-components"
import { font_family_default } from "../theme/_variables"

const Subheading = ({ text }) => {
  return <H2>{text}</H2>
}

export default Subheading

const H2 = styled.h2`
  width: 100%;
  line-height: 1.1;
  font-family: ${font_family_default};
  font-size: ${({ fontSize }) => fontSize};
  font-size: 15px;
  text-align: ${({ align }) => align};
`
