import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: 0;
 font-family: 'Nunito Sans', sans-serif;
 -webkit-font-smoothing: antialiased;
 outline: none;
 }

body {
   background: ${(props) => props.theme.background};
}

button {
 cursor: pointer;
}`;
