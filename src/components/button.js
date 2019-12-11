import React from "react"
import styled from "styled-components"
import {
  green,
  dark_green,
  font_family_heading_bold,
} from "../theme/_variables"

const Button = ({ text }) => {
  return <ButtonWrapper>{text}</ButtonWrapper>
}
export default Button

const ButtonWrapper = styled.button`
  align-items: flex-start;
  background-color: ${green};
  border: 1px solid #ffffff;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 0 rgba(214, 209, 230, 0.25);
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-family: ${font_family_heading_bold};
  font-size: 24px;
  font-weight: 900;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.8rem;
  text-align: center;
  max-width: 300px;
  width: 300px;
  padding: 0.125rem 0.5rem 0.125rem 0.5rem;
  text-transform: uppercase;
  width: 100%;
  transition: background-color 150ms linear;

  &:hover {
    background-color: ${dark_green};
    outline: none;
  }
`
