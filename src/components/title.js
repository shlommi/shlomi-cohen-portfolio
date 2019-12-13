import React from "react"
import whatsapp from "../images/whatsapp-fill.svg"
import github from "../images/github-fill.svg"
import linkedin from "../images/linkedin-fill.svg"
import facebook from "../images/facebook-fill.svg"
import styled from "styled-components"
import { font_family_heading_black } from "../theme/_variables"

import Button from "../components/button"

const TitleHeader = () => {
  return (
    <TitleWrapper>
      <NameWarpper>
        <h1>Shlomi Cohen</h1>
        <h2>Frontend Developer</h2>
      </NameWarpper>
      <IconsWrapper>
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

const TitleWrapper = styled.div`
  @media (max-width: 959px) {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    h1 {
      font-family: ${font_family_heading_black};
      font-size: 20px;
      text-align: center;
    }
  }

  @media (min-width: 960px) {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.5rem auto;
  }

  h1 {
    font-family: ${font_family_heading_black};
    font-size: 40px;
  }

  h2 {
    font-size: 28px;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
