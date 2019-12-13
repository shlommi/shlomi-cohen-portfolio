import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"
import GlobalStyle from "../../theme/globalStyle"
import { Main } from "./layout.styles"
import { MDXProvider } from "@mdx-js/react"
import * as DesignSystem from "../../components/layout/custom-mdx"

const Layout = ({ children }) => {
  return (
    <>
      <>
        <GlobalStyle />
        <Header />
        <Main>
          <MDXProvider
            components={{
              h1: DesignSystem.H1,
              h2: DesignSystem.H2,
            }}
          >
            {children}
          </MDXProvider>
        </Main>
        <Footer />
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
