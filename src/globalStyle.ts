import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,100&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    overflow: auto;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text}
  }

  * {
    margin: 0;
    padding: 0;
    transition: all .2s, color .1s;
  }
`