import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from "styled-components"

const ImageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default ImageWrapper

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: contain !important;
  }

  @media (max-width: 599px) {
    margin: 2rem auto;
  }
  @media (min-width: 600px) {
    margin: 8rem auto;
  }
`