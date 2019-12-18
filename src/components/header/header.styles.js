import styled from "styled-components"
import { Link } from "gatsby"
import {
  font_black,
  background_white,
  green,
  dark_green,
} from "../../theme/_variables"

export const HeaderWrapper = styled.header`
  .current-page {
    color: ${green};
  }
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1000;
  line-height: 1.45;
  z-index: 1000;

  nav {
    background-color: ${background_white};
    display: flex;
    position: relative;
    justify-content: flex-start;
    z-index: 5;
    -webkit-box-pack: start;
  }

  @media (max-width: 959px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: ${green};
      right: -15px;
      top: 34px;
      height: 1px;
      width: calc(100% - 15px);
      z-index: 1;
    }
  }
  @media (min-width: 960px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: ${green};
      right: 0px;
      top: 36px;
      height: 1px;
      width: calc(100% - 29px);
      z-index: 1;
    }
  }
`

export const NavItem = styled(Link)`
  font-family: ${font_black};
  font-weight: 900;
  color: ${dark_green};
  line-height: 1.25rem;
  margin: 0;
  padding-top: calc(0.5rem - 1px);
  padding-right: 0.8rem;
  padding-bottom: calc(0.5rem - 1px);
  padding-left: 0.8rem;
  text-transform: uppercase;
  transition: all 250ms linear 0s;
  text-decoration: none;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  font-size: 1.125rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  &:first-child {
    width: 48px;
    z-index: 10;
    margin: 0px 0.75rem 0px 0px;

    img {
      position: absolute;
      top: -5px;
      left: -7px;
    }
  }

  &:hover {
    color: ${green};
  }

  @media (max-width: 959px) {
    padding-top: calc(0.5rem - 1.2px);
    padding-right: 0.3rem;
    padding-bottom: calc(0.5rem - 1.2px);
    padding-left: 0.3rem;

    &:first-child {
      margin: 0px 0.2rem 0px 0px;
      img {
        position: absolute;
        top: -8px;
        left: -8px;
      }
    }
  }

  @media (min-width: 960px) {
    &:first-child {
      margin: 0px 0.2rem 0px 0px;
      img {
        position: absolute;
        top: -8px;
        left: -8px;
      }
    }
  }
`
export const DummyDiv = styled.div`
  flex: 25%;

  @media (max-width: 959px) {
    display: none;
  }
`
