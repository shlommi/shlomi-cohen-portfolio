import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HelloWorldImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hello-world.png" }) {
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img
        fadeIn={false}
        fluid={data.file.childImageSharp.fluid}
        alt="hello-world"
      />
    </ImageWrapper>
  )
}

export default HelloWorldImage

const ImageWrapper = styled.div`
  display: block;
  max-width: 350px;
  max-height: 450px;
  @media (max-width: 599px) {
    margin: 0 auto 2rem auto;
  }
  @media (min-width: 600px) {
    text-align: center;
    margin: 4rem auto 1rem auto;
  }
`
