import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HelloWorldImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hello-world.png" }) {
        childImageSharp {
          fixed(width: 400, height: 500, quality: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img fixed={data.file.childImageSharp.fixed} alt="hello-world" />
    </ImageWrapper>
  )
}

export default HelloWorldImage

const ImageWrapper = styled.div`
  @media (max-width: 600px) {
    margin: 0;
  }
  @media (max-width: 959px) {
    img {
      margin: 0 auto;
      object-fit: contain !important;
    }
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.5rem auto;
  }
  @media (min-width: 960px) {
    grid-column: span 2;
    grid-column-end: auto;
    display: flex;
    -webkit-box-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 2rem;
    img {
      margin: 0;
    }
  }
`
