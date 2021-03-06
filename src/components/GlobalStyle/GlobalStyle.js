import { createGlobalStyle } from 'styled-components' 

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    #__next {
      height: 100vh;
    }
  }
  p {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle;