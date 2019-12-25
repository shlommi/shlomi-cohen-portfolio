import React from "react"
import styled from "styled-components"
import { font_black, green, white_green } from "../theme/_variables"

const HeadingProject = ({ children }) => {
  return <H2>{children}</H2>
}

export default HeadingProject
const H2 = styled.h2`
  margin-top: 3rem;
  a {
    color: inherit;
    text-decoration: none;
    line-height: 1.1;
    text-align: left;
    margin: 1.8rem 0px 0.25rem;
    font-family: ${font_black};
    padding: 0px 0.25rem;
    transition: all 150ms linear 0s;

    &:hover {
      background-color: ${green};
      color: ${white_green};
      border-radius: 0.25rem;
      outline: 0px;
      text-decoration: none;
    }
  }
`
