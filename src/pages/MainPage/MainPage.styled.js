import styled from "styled-components";
//Mobile
import bgMobile from "../../images/mainPage-image/bg-mobile.png";
import bgMobile2x from "../../images/mainPage-image/bg2x-mobile.png";
//Tablet
import bgTablet from "../../images/mainPage-image/bg-tablet.png";
import bgTablet2x from "../../images/mainPage-image/bg2x-tablet.png";
//Desk
import bgDesk from "../../images/mainPage-image/bg-desk.png";
import bgDesk2x from "../../images/mainPage-image/bg2x-desk.png";
export const MainSection = styled.section`
  padding-top: 60px;
  background-size: cover;
  background-position: center;
  /* background-image: url(${bgMobile}); */
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    /* background-image: url(${bgMobile2x}); */
  }
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    background-blend-mode: multiply;
    background-position: center;
    background-size: cover;
    /* background-image: url(${bgTablet}); */
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      /* background-image: url(${bgTablet2x}); */
    }
  }
  @media screen and (min-width: 1280px) {
    /* background-image: url(${bgDesk}); */
    display: flex;
    padding-top: 20px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      /* background-image: url(${bgDesk2x}); */
    }
  }
`;
export const TttleBox = styled.div`
  /* margin-right: -260px;
  margin-top: 188px; */
`;
export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.375;
  font-weight: 700;

  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: inline-block;

    margin-left: 32px;
    margin-right: 148px;
    font-size: 68px;
    line-height: 1.47;
  }
  @media screen and (min-width: 1280px) {
    line-height: 1.9;
    font-weight: 800;
    margin-top: 158px;
    margin-right: -188px;
    margin-left: 16px;
    width: 501px;
  }
`;
export const Wrapper = styled.div`
  img {
    height: 100%;

    width: 100%;
  }
`;
