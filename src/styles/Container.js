import styled from "styled-components";
import bgDesktop from "../assets/bgDesktop.svg";
import bgTablet from "../assets/bgTablet.svg";
import bgMobile from "../assets/bgMobile.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  /* padding: 20px 20px 0; */

  @media ${(props) => props.theme.media.phone} {
    /* background-image: url(${bgMobile}); */
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 768px;
    /* padding: 24px 32px 0; */
    /* background-image: url(${bgTablet}); */
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 1280px;
    /* padding: 20px 16px 0; */
    /* background-image: url(${bgDesktop}); */
  }
`;
