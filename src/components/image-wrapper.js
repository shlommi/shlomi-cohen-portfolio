import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from "styled-components"

const ImageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default ImageWrapper

const Wrapper = styled.div`
  /* text-align: center;
  display: block; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 599px) {
    margin: 2rem auto;
  }
  @media (min-width: 600px) {
    margin: 8rem auto;
  }
`
