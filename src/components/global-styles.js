// import { createGlobalStyle } from 'styled-components'
import * as styled from 'styled-components'

// const GlobalStyles = createGlobalStyle`
const GlobalStyles = styled.createGlobalStyle`
  :root {
    --primary: #efb6b2;
    --secondary: #4e4e4e;
    --error: #ff4a4a;
  }

  /* base styles & title */
  body {
    font-family: 'Noto Serif';
    color: var(--secondary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    /* margin: 0; */
    /* padding: 0; */
    box-sizing: border-box;
  }
`

export default GlobalStyles
