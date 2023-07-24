import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
  }

  body { 
    font-family: ${(props) => props.theme.fonts.main};
    margin: 0 ;
    padding: 0;  
  }

  ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }


  a {
    text-decoration: none;   
  } 

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  font-family: ${(props) => props.theme.fonts.main};

}

svg{
  fill: none;
}
`;
