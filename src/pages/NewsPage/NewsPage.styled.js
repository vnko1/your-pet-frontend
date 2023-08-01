import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 117px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 80px 0 126px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 80px 0 452px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  cursor: pointer;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

export const NewsList = styled.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 40px;

  @media ${(props) => props.theme.media.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px;
    margin-bottom: 60px;
  }
  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 68px;
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
  width: 280px;
  margin: auto;

  @media ${(props) => props.theme.media.tablet} {
    width: calc((100% - 32px) / 2);
  }
  @media ${(props) => props.theme.media.desktop} {
    width: calc((100% - 64px) / 3);
  }
`;

export const ShadowBox = styled.div`
  border-radius: 20px;
  position: relative;

  box-shadow: ${(props) => props.theme.shadow.normal};

  height: 578px;

  @media ${(props) => props.theme.media.tablet} {
    height: 556px;
  }
  @media ${(props) => props.theme.media.desktop} {
    height: 534px;
  }
`;

export const NewsImg = styled.img`
  border-radius: 20px;
  object-fit: cover;
  object-position: 50% 0;
  height: 252px;
`;

export const Content = styled.div`
  padding: 16px 12px 12px;
`;

export const AdditionalInfo = styled.div`
  position: absolute;

  bottom: 12px;
  width: 93%;
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

export const ArticleText = styled.p`
  max-height: 128px;
  overflow: hidden;
`;
