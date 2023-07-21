import styled from "styled-components";
import avatarImg from "./../../../../assets/avatar.png";

const StyledUser = styled.a`
  &:before {
    content: "";
    width: 28px;
    height: 28px;
    background-image: url("${avatarImg}");
    background-repeat: no-repeat;
    background-size: 28px 28px;
  }
  & {font-size: 16px;
  line-height: 1.37;
  color: #ffc107;}
`;

export default StyledUser;