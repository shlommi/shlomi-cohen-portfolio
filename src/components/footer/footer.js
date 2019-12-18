import React from "react"
import {
  FooterWrapper,
  Line,
  FooterNav,
  FooterNavItem,
  BottomFooter,
} from "./footer.styles"
import logo from "../../images/logo-footer.svg"

function Footer() {
  return (
    <>
      <Line />
      <FooterWrapper>
        <FooterNav>
          <FooterNavItem to="/">Home</FooterNavItem>
          <FooterNavItem to="/about">About</FooterNavItem>
          <FooterNavItem to="/projects">Project</FooterNavItem>
          <FooterNavItem to="/blog">Blog</FooterNavItem>
          <FooterNavItem to="/contact">Contact</FooterNavItem>
        </FooterNav>
        <BottomFooter>
          All content ©{" "}
          <span>
            <img src={logo} width="10" alt="logo" />
          </span>
          Shlomi Cohen {new Date().getFullYear()}
        </BottomFooter>
      </FooterWrapper>
    </>
  )
}
export default Footer
