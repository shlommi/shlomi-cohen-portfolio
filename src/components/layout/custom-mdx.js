import React from "react"
import {
  font_family_heading_black,
  font_family_default,
} from "../../theme/_variables"

export const H1 = props => (
  <h1
    style={{
      textAlign: "center",
      fontFamily: font_family_heading_black,
      fontSize: `25px`,
    }}
    {...props}
  />
)
export const H2 = props => (
  <h2
    style={{
      textAlign: "center",
      fontFamily: font_family_default,
      lineHeight: 1,
      marginTop: "0.875rem",
      smoothing: `antialiased`,
      opacity: 0.7,
      fontSize: `14px`,
      fontWeight: 300,
    }}
    {...props}
  />
)
