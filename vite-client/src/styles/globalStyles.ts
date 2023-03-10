import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  :root {
    --primary: #000000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retwitte: #00C06B;
    --twitter: #33A1F2;
    --twitter-ligth-hover: #2C8ED6;
    --twitter-dark-hover: #011017;
    --favorite: #E8265E;
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
