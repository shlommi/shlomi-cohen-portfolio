import React from "react"
import styled from "styled-components"

const ImageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default ImageWrapper

const Wrapper = styled.div`
  text-align: center;
  display: block;

  @media (max-width: 599px) {
    margin: 3rem auto 5rem auto;
    max-width: 200px;
  }
  @media (min-width: 600px) {
    max-width: 300px;
    margin: 6rem auto;
  }
`
