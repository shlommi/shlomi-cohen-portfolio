import styled from "styled-components"
import { Link } from "gatsby"
import { dark_green, green, white_green } from "../../theme/_variables"

export const FooterWrapper = styled.footer`
  display: flex;
  max-width: 57ch;
  margin: 0 auto;
  margin-top: 1rem;
  padding-bottom: 2rem;

  @media (max-width: 959px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (min-width: 960px) {
    max-width: 100%;
    width: 960px;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
`
export const Line = styled.div`
  display: block;
  max-width: 57ch;
  margin: 0 auto;
  height: 1px;
  background-color: #b4e2e2;
  @media (min-width: 960px) {
    max-width: 100%;
    width: 960px;
  }
`
export const FooterNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
  @media (min-width: 960px) {
    max-width: 100%;
  }
`
export const FooterNavItem = styled(Link)`
  color: ${dark_green};
  font-size: 13.5px;
  margin: 0 0.25rem 0 0.25rem;
  padding: 0.25rem;
  transition: all 150ms linear 0s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${green};
    border-radius: 0.25rem;
    outline: 0;
    color: ${white_green};
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

export const BottomFooter = styled.div`
  display: block;
  margin: 0;
  order: 1;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }

  @media (max-width: 959px) {
    text-align: center;
    font-size: 0.75rem;
  }
  @media (min-width: 960px) {
    text-align: left;
    width: 50%;
    font-size: 0.85rem;
  }
`
