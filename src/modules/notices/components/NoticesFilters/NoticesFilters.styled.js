import styled from "styled-components";

export const FilterBtn = styled.button`
  display: flex;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background-color: #c5dff6;
  }

  @media (min-width: 768px) {
    width: 152px;
    height: 40px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 40px;
    border: 2px solid #54adff;
    color: #54adff;
    background-color: #ffffff;
  }

  &:hover,
  &:focus {
    border: transparent;
    color: #fef9f9;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  &:hover svg path,
  &:focus svg path {
    stroke: #fef9f9;
  }
`;
