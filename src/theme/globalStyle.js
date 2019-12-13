import { createGlobalStyle } from "styled-components"
import {
  font_family_default,
  font_size_md,
  background_white,
} from "./_variables"

const GlobalStyle = createGlobalStyle`
         * {
            box-sizing: border-box;
            margin: 0;
          }
        
          body {
            background-color:${background_white};
            color: #133030;
            font-family: ${font_family_default};
            font-size: ${font_size_md};
            line-height: 1.4;
			      margin: 0 auto;
            max-width: 90%;
            min-height: 100vh;
            box-sizing: border-box;
          }
        
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }
         
          li {
            margin-top: 0.25rem;
          }
`

export default GlobalStyle
