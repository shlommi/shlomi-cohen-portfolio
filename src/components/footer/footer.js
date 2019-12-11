import React from "react"
import {
  FooterWrapper,
  Line,
  FooterNav,
  FooterNavItem,
  BottomFooter,
} from "./footer.styles"

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
          All content © Shlomi Cohen {new Date().getFullYear()}
        </BottomFooter>
      </FooterWrapper>
    </>
  )
}
export default Footer
