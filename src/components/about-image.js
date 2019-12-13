import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shlomi-cohen.png" }) {
        childImageSharp {
          fixed(width: 214, height: 214) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img
        fadeIn="false"
        fixed={data.file.childImageSharp.fixed}
        alt="shlomi-cohen"
      />
    </ImageWrapper>
  )
}

export default AboutImage

const ImageWrapper = styled.div`
  @media (max-width: 959px) {
    margin: 5rem auto 1.5rem auto;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain !important;
    }
  }
  @media (min-width: 960px) {
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

// import React from "react"
// import styled from "styled-components"

// const Image = ({ children }) => {
//   return <ImageWrapper>{children}</ImageWrapper>
// }

// const ImageWrapper = styled.figure`
//   @media (max-width: 700px) {
//     display: block;
//     max-width: 300px;
//     width: 300px;
//     margin-top: 1rem;
//   }
//   @media (min-width: 700px) {
//     display: block;
//     float: right;
//     margin-left: 30px;
//   }
// `
// export default Image
