import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shlomi-cohen.png" }) {
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img fluid={data.file.childImageSharp.fluid} alt="shlomi-cohen" />
    </ImageWrapper>
  )
}

export default AboutImage

const ImageWrapper = styled.div`
  display: block;
  max-width: 200px;
  @media (max-width: 599px) {
    margin: 10vh auto 2rem auto;
    max-width: 200px;
  }
  @media (min-width: 600px) {
    text-align: center;
    max-width: 280px;
    margin: 8rem auto 1rem auto;
  }
`
