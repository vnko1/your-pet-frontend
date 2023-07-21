import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  border-color: transparent;
  color: #54adff;
  background: #cce4fb;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: #54adff;
  }
`;
