import styled from "styled-components";

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 25px auto;

  @media screen and (min-width: 768px) {
    margin: 0 0;
  }
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 25px auto;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    margin: 0 0;
  }
`;

export const PhotoContainer = styled.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
export const UserPhotoBtnCheck = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const UserPhotoTitle = styled.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`;

export const UserPhotoBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const UserPhotoEdit = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const UserPhotoIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #54adff;
`;
export const UserPhotoIconDell = styled.svg`
  width: 34px;
  height: 34px;
  stroke: red;
`;
// export const PhotoWrap = styled.div`
//   position: relative;

//   margin-bottom: 14px;
//   margin-left: 65px;
//   border-radius: 40px;
//   overflow: hidden;
// `;

// export const Img = styled.img`
//   width: 182px;
//   height: 182px;
//   overflow: hidden;
//   object-fit: cover;
