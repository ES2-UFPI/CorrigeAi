import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  :root {
    --primary: #C9D5FF;
    --secondary: #272643;
    --about: rgb(72,61,139,.30);
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --greenHover: #76DC28;
    --twitter: #33A1F2;
    --redButton: #B8282A;
    --redButtonHover: #8E1F21;
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100%;
    width: 100vw;
    height: 100%;
    color: white;
    font-size: 1.6rem;
  }

  html { 
    background: var(--primary)
  }

  *, button, input {
    font-family: -apple-system, system-ui, sans-serif;
  }
`
