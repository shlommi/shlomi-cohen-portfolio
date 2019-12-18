import PropTypes from "prop-types"
import { HeaderWrapper, NavItem, DummyDiv } from "./header.styles"
import logo from "../../images/s-logo.svg"
import React from "react"

const Header = () => (
  <HeaderWrapper>
    <nav>
      <NavItem to="/">
        <img src={logo} width="51" alt="logo" className="logo-header" />
      </NavItem>
      <NavItem to="/about" activeClassName="current-page">
        ABOUT
      </NavItem>
      <NavItem to="/projects" activeClassName="current-page">
        PROJECTS
      </NavItem>
      <NavItem to="/blog" activeClassName="current-page">
        BLOG
      </NavItem>
      <DummyDiv />
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
