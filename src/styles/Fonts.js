import { createGlobalStyle } from "styled-components";

import Manrope from "../assets/Fonts/Manrope/Manrope-VariableFont_wght.ttf";
import Inter from "../assets/Fonts/Inter/Inter-VariableFont_slnt,wght.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Manrope";
    src: local("Manrope"), url(${Manrope}) format("truetype");
  }
  @font-face {
    font-family: "Inter";
    src: local("Inter"), url(${Inter}) format("truetype");
  }
`;

export default FontStyles;
