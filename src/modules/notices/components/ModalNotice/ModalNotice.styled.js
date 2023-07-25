import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  width: 681px;
  height: 540px;
  padding: 24px 31px;
  border-radius: 40px;
  background: #5555;

  @media (max-width: 767px) {
    /* width: 100%; */
    width: 280px;
    height: auto;
    border-radius: 20px;
    padding: 44px 20px 16px 20px;
  }
`;

export const Image = styled.img`
  width: 262px;
  height: 298px;

  border-radius: 0px 0px 40px 40px;
  background: lightgray 0px -4.16px / 100% 131.822% no-repeat;

  @media (max-width: 767px) {
    width: 240px;
    height: auto;
    border-radius: 0px 0px 40px 40px;
    background: lightgray 0px -14.355px / 100% 150.131% no-repeat;
  }
`;

export const ModalNoticeWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 28px;

  @media (max-width: 767px) {
    flex-flow: row wrap;
    gap: 12px;
    margin-bottom: 13px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 26px;
  background-color: transparent;
  border: transparent;

  width: 24px;
  height: 24px;
  padding: 0;

  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
  }

  :hover svg path,
  :focus svg path {
    stroke: rgb(255, 193, 7);
  }
`;

export const Title = styled.h1`
  width: 321px;
  margin-bottom: 20px;

  color: #000;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 24px;
    letter-spacing: -0.24px;
    margin-bottom: 22px;
  }
`;

export const ModalNoticeInfoList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 8px;
  /* margin-bottom: 12px; */
`;

export const Comments = styled.p`
  width: 618px;
  margin-bottom: 70px;

  color: #000;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.64px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.56px;
    margin-bottom: 12px;
  }
`;

export const CommentsBold = styled.span`
  color: #000;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.64px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.56px;
  }
`;

export const AddBtn = styled.button`
  // position: absolute;
  // right: 177px;
  // bottom: 24px;

  display: flex;
  width: 129px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  

  border-radius: 40px;
  background: #54adff;
  border: 2px solid #54adff;

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    position: absolute;
    right: 177px;
    bottom: 24px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 40px;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #54adff;
  }

  :hover,
  :focus {
    border: transparent;
    color: #fff;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;

export const ContactBtn = styled.button`
  display: flex;
  width: 129px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0;

  border-radius: 40px;
  border: 2px solid #54adff;
  color: #54adff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    position: absolute;
    right: 31px;
    bottom: 24px;
  }

  @media (max-width: 767px) {
    // right: 12px;
    // bottom: 64px;
    width: 100%;
    height: auto;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #54adff;
    margin-bottom: 8px;
  }

  :hover,
  :focus {
    border: transparent;
    color: #fff;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;

export const AddressLink = styled.a`
  color: #ffc107;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ModelItemInfo = styled.li`
  display: flex;
  gap: 51px;
  /* margin-bottom: 8px; */

  color: #000;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    gap: 20px;
  }
`;

export const Key = styled.p`
  width: 61px;
`;
export const Value = styled.p`
  /* width: 61px; */
`;
