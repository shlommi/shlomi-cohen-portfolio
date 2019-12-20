import React from "react"
import styled from "styled-components"

const ImageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default ImageWrapper

const Wrapper = styled.div`
  text-align: center;
  display: block;
  max-width: 400px;

  @media (max-width: 599px) {
    margin: 3rem auto 5rem auto;
  }
  @media (min-width: 600px) {
    margin: 6rem auto;
  }
`
