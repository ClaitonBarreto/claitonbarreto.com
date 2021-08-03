import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    overflow: hidden;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text}
  }

  * {
    margin: 0;
    padding: 0;
    transition: all .2s;
  }
`