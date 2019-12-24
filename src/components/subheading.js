import React from "react"
import styled from "styled-components"
import { font_regular, textColor } from "../theme/_variables"

const Subheading = ({ text }) => {
  return <H2>{text}</H2>
}

export default Subheading

const H2 = styled.h2`
  font-family: ${font_regular};
  color: ${textColor};
  font-size: 82%;
  text-align: center;
  margin-top: 0.55rem;
  margin-bottom: 4rem;
  font-weight: 300;
`
