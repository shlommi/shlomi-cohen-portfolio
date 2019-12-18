import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shlomi-cohen.png" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img
        fadeIn="false"
        fluid={data.file.childImageSharp.fluid}
        alt="shlomi-cohen"
      />
    </ImageWrapper>
  )
}

export default AboutImage

const ImageWrapper = styled.div`
  display: block;
  max-width: 200px;
  max-height: 200px;
  @media (max-width: 599px) {
    margin: 15vh auto 2rem auto;
    max-width: 160px;
    max-height: 160px;
  }
  @media (min-width: 600px) {
    text-align: center;
    margin: 8rem auto 1rem auto;
  }
`
