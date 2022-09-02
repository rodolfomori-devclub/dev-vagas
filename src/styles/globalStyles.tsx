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

html {
   @media (max-width: 1080px){
      font-size: 93.75%;
   }

   @media (max-width: 720px){
      font-size: 87.5%;
   }
}

body {
   background: ${(props) => props.theme.background};
}

button {
 cursor: pointer;
}`;
