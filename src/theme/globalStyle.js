import { createGlobalStyle } from "styled-components"
import {
  font_size_md,
  background_white,
  dark_green,
  font_black,
  font_regular,
  textColor,
} from "./_variables"

const GlobalStyle = createGlobalStyle`
         * {
            box-sizing: border-box;
            margin: 0;
          }
        
          body {
            background-color:${background_white};
            color: ${dark_green};
            font-family: ${font_regular};
            font-size: ${font_size_md};
            line-height: 1.45;
			      margin: 0 auto;
            max-width: 90%;
            min-height: 100%;
            box-sizing: border-box;

        
          }
        
          h1,
          h2,
          h3
           {
            font-weight: 900;
            margin-top: 1.5rem;
            line-height: 1.1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;


            + * {
              margin-top: 0.5rem;
            }


          }

          h1 {
            font-family: ${font_black};
            font-size: 200%;
            font-weight: 900;
          }
          h2 {
            font-family: ${font_black};
            margin-top: 2rem ;
            font-size: 159%;
            font-weight: 900;
          }

          p {
            margin-top: 1.25rem;
            line-height:1.55;
            color: ${textColor};
         }

         ul {
           margin-top: 1.25rem;
           line-height:1.55;

         }

          li {
            margin-top: 0.25rem;
          }
`

export default GlobalStyle
