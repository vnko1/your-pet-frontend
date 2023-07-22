import styled from "styled-components";

export const AddPetBtn = styled.button`
  display: flex;

  @media (max-width: 767px) {
    position: absolute;
    bottom: -220px;
    right: 0px;
    width: 80px;
    height: 80px;
    flex-direction: column-reverse;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 1;
  }

  width: 129px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;

  border-color: transparent;
  color: #ffffff;
  background: #419ef1;

  &:hover,
  &:focus {
    color: #fef9f9;
    /* background: #54adff; */
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;
