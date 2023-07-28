import styled from "styled-components";
// import rectangleMob from "../../assets/RectangleMob.svg";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media ${(props) => props.theme.media.tablet} {
    padding: 80px 0 60px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 80px 0 68px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 48px;
    margin-bottom: 40px;
    /* font-style: normal;
    font-weight: 700; */
  }
`;

export const NewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  /* margin-top: 24px; */
  @media ${(props) => props.theme.media.tablet} {
    gap: 32px;
  }
`;

export const DecorationLine = styled.div`
  height: 8px;
  margin-bottom: 12px;
  border-radius: 40px;
  background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  @media ${(props) => props.theme.media.tablet} {
    margin-bottom: 14px;
  }
`;

export const NewsItem = styled.li`
  width: 100%;

  @media ${(props) => props.theme.media.tablet} {
    /* width: calc((100% - 64px) / 2);
     */
    width: calc((100% - 32px) / 2);
  }
  @media ${(props) => props.theme.media.desktop} {
    width: calc((100% - 64px) / 3);
  }
`;

export const ShadowBox = styled.div`
  border-radius: 20px;

  box-shadow: ${(props) => props.theme.shadow.normal};
`;

export const NewsImg = styled.img`
  border-radius: 20px;
  object-fit: cover;
  object-position: 50% 0;

  @media ${(props) => props.theme.media.desktop} {
    /* width: 395px; */
    height: 252px;
  }
`;

export const Content = styled.div`
  padding: 16px 12px 12px;
  /* height: 326px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReadMoreLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

export const NewsDate = styled.p`
  color: ${(props) => props.theme.colors.grey};
`;

export const ArticleTitle = styled.h2`
  margin-bottom: 16px;
`;
