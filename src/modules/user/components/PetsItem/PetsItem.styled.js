import styled from "styled-components";

export const UserPetsInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  padding: 15px 20px 40px 20px;
  margin-top: 24px;

  min-height: 420px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 703px;
    min-height: 256px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    min-height: 200px;
    padding: 20px;
  }
`;

export const UserPetsImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
  }
`;

export const UserPetsList = styled.ul`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 32px;
  }
`;

export const UserPetsItem = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.04em;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const UserPetsItemSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.04em;
  }
`;

export const UserPetsBtn = styled.button`
  position: absolute;
  top: 275px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
export const UserPetsSvg = styled.svg`
  width: 20px;
  height: 20px;

  fill: ${(props) => props.theme.colors.primary};
`;
