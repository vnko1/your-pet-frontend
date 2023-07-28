import styled from "styled-components";

export const UserPetsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const UserPetsTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media screen and (min-width: 768px) {
    gap: 0;
    width: 703px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const UserPetsTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const UserPetsNavBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  cursor: pointer;

  width: 129px;
  height: 40px;
  left: 1127px;
  top: 128px;
  background: #54adff;
  border-radius: 40px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #fef9f9;

  &:hover,
  &:focus {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: #fef9f9;
  }
`;

export const NoUserPets = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
  text-align: center;

  @media (${(props) => props.theme.media.tablet}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

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
export const UserPetsBtnDell = styled.button`
  position: absolute;
  top: 10%;
  right: 5%;

  transform: translateY(-50%);

  width: 24px;
  height: 24px;

  background-color: transparent;
  border: 2px solid rgb(84, 173, 255);
  border-radius: 4px;

  transition: border 250ms ease-in-out;

  cursor: pointer;
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
