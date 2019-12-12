import React from "react"
import styled from "styled-components"

const Image = ({ children }) => {
  return <ImageWrapper>{children}</ImageWrapper>
}

const ImageWrapper = styled.figure`
  @media (max-width: 700px) {
    display: block;
    max-width: 300px;
    width: 300px;
    margin-top: 1rem;
  }
  @media (min-width: 700px) {
    display: block;
    float: right;
    margin-left: 30px;
  }
`
export default Image
