import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors['brand-yellow-dark']}
}

body {
  background: ${(props) => props.theme.colors['base-background']};
  color: ${(props) => props.theme.colors['base-title']};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
   min-width: 319px;
}

body, input-security, textarea, button {
  background: ${(props) => props.theme.colors['base-background']};
  font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /*input[type="numer"] {
    -moz-appearance: textfield;
  }*/
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors['brand-purple']}
  }
`
