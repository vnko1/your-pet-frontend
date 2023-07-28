import styled from "styled-components";

export const UserPage = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserPageItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserFormTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  margin-bottom: 18px;
  color: #000000;

  @media (${(props) => props.theme.media.tablet}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const UserFormBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 517px;
  margin-left: auto;
  margin-right: auto;

  padding: 20px 8px 4px 8px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media (${(props) => props.theme.media.tablet}) {
    width: 704px;
    height: 268px;
    flex-direction: row-reverse;
    padding: 20px 20px 20px 20px;
    gap: 71px;
    border-radius: 40px;
  }

  @media (${(props) => props.theme.media.desktop}) {
    width: 395px;
    height: 520px;
    flex-direction: column;
    padding: 20px 24px 20px 16px;
    border-radius: 40px;

    gap: 0;
  }
`;

export const UserBtnPen = styled.button`
  position: absolute;
  top: 8%;
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

export const IconShown = styled.img`
  width: 100%;
  height: 100%;

  transition: fill 250ms ease-in-out;
`;

export const UserInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserInput = styled.div`
  width: 182px;
  height: 182px;
  margin-bottom: 14px;
  border-radius: 40px;
  overflow: hidden;
`;

export const UserImg = styled.img`
  width: 182px;
  height: 182px;
  object-fit: cover;
`;

export const UserInputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  gap: 11px;
  width: 94px;
  padding: 0;
  background-color: transparent;
  border: none;
  margin-bottom: 22px;
  cursor: pointer;
`;

export const UserLabel = styled.label`
  display: flex;
  gap: 11px;
  margin-bottom: 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;

  cursor: pointer;
`;
