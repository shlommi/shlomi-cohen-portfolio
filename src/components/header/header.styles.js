import styled from "styled-components"
import { Link } from "gatsby"
import {
  font_family_heading_black,
  background_white,
  green,
  dark_green,
} from "../../theme/_variables"

export const HeaderWrapper = styled.header`
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1000;

  nav {
    background-color: ${background_white};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
  }

  @media (max-width: 959px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: ${green};
      right: 0px;
      top: 33px;
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
  font-family: ${font_family_heading_black};
  font-size: 18px;
  color: ${dark_green};
  line-height: 22.5px;
  margin: 0;
  padding: 0.4rem 0.7rem;
  text-transform: uppercase;
  transition: all 250ms linear 0s;
  text-decoration: none;
  cursor: pointer;

  &:first-child {
    width: 42px;
    height: 33px;
    z-index: 10;
    margin: 0px 0.75rem 0px 0px;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &:hover {
    color: ${green};
  }

  @media (max-width: 959px) {
    font-size: 14px;
    padding: 0.3rem 0.6rem;

    &:first-child {
      margin: 0px 0.2rem 0px 0px;
    }
  }
`
export const DummyDiv = styled.div`
  flex: 25%;

  @media (max-width: 959px) {
    display: none;
  }
`
