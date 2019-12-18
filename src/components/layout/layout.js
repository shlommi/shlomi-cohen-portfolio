import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"
import GlobalStyle from "../../theme/globalStyle"
import { Main } from "./layout.styles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
