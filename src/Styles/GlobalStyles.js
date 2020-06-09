import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
body, html{
    margin:0;
    padding:0;
    box-sizing:border-box;
    width:100%;
    height:100%;
  }
  .bodyScroll{
      overflow:hidden;
  }
`;
