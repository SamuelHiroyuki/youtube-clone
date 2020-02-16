import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body {
	  font-family: Roboto, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
