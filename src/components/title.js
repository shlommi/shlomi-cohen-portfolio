import React from "react"
import whatsapp from "../images/whatsapp-fill.svg"
import github from "../images/github-fill.svg"
import linkedin from "../images/linkedin-fill.svg"
import facebook from "../images/facebook-fill.svg"
import styled from "styled-components"
import { font_family_heading_black } from "../theme/_variables"
import { Flex } from "../theme/grid"

import Button from "../components/button"

const TitleHeader = () => {
  return (
    <TitleWrapper justify="center" align="center">
      <NameWarpper>
        <h1>Shlomi Cohen</h1>
        <h2>Frontend Developer</h2>
      </NameWarpper>
      <IconsWrapper justify="center" align="center">
        <img src={whatsapp} alt="whatsapp" />
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
        <img src={facebook} alt="facebook" />
      </IconsWrapper>
      <Button text="SEE MY PROJECTS" />
    </TitleWrapper>
  )
}

export default TitleHeader

const TitleWrapper = styled(Flex)`
  @media (max-width: 959px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0;

    h1 {
      font-family: ${font_family_heading_black};
      font-size: 20px;
    }
  }

  @media (min-width: 960px) {
    grid-column: 3 / span 2;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    min-height: 85vh;
    padding-bottom: 2rem;
  }

  h1 {
    font-family: ${font_family_heading_black};
    font-size: 40px;
  }

  h2 {
    font-size: 28px;
  }
`

const IconsWrapper = styled(Flex)`
  width: 100%;
  max-width: 400px;
  margin-top: 0.75rem;
  img {
    margin: 0.5rem;
    max-width: 40px;
    width: 60px;
  }

  @media (min-width: 960px) {
    img {
      margin: 0.75rem;
      max-width: 40px;
      width: 60px;
    }
  }
`

const NameWarpper = styled.div`
  width: 100%;
  max-width: 420px;
`
