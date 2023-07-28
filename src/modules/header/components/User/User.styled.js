import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUser = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;

  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 6px;
    right: 12px;
  }

  // width: 113px
`;

export const StyledUserName = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: #ffc107;
`;
export const StyledUserIcon = styled.img`
  width: 28px;
  height: 28px;
`;