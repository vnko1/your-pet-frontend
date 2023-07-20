import styled from "styled-components";
import logoImg from "./../../../../assets/logo-mobile.png";

const StyledLogo = styled.div`
  width: 116px;
  height: 20px;
  border: 1px solid red;
  background-image: url("${logoImg}");
  background-repeat: no-repeat;
  background-size: 116px 20px;
`;

export default StyledLogo;
