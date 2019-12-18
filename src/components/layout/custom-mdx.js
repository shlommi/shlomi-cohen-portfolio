import React from "react"
import { font_black, font_regular, textColor } from "../../theme/_variables"

export const H1 = props => (
  <h1
    style={{
      fontFamily: font_black,
      fontSize: `200%`,
      marginTop: `1.7rem`,
    }}
    {...props}
  />
)
export const H2 = props => (
  <h2
    style={{
      fontFamily: font_black,
      fontSize: `159%`,
      marginTop: `1.7rem`,
    }}
    {...props}
  />
)

export const P = props => (
  <p
    style={{
      fontFamily: font_regular,
      color: textColor,
      lineHeight: 1.45,
      marginTop: "1.25rem",
      fontSize: `109%`,
    }}
    {...props}
  />
)
