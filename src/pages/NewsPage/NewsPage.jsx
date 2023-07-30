import {
  Wrap,
  Title,
  NewsList,
  NewsItem,
  Content,
  NewsImg,
  ShadowBox,
  DecorationLine,
  AdditionalInfo,
  ReadMoreLink,
  NewsDate,
  ArticleTitle,
} from "./NewsPage.styled";
import SearchBar from "../../shared/components/SharedComponents/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../redux/news/news-selectors";
import { useEffect } from "react";
import { getNews } from "../../redux/news/news-operation";

export const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Wrap>
      <Title>News</Title>
      <SearchBar />
      <NewsList>
        {news.map(({ _id, imgUrl, title, text, date, url }) => (
          <NewsItem key={_id}>
            <DecorationLine></DecorationLine>
            <ShadowBox>
              <NewsImg src={imgUrl} alt="article's image" />
              <Content>
                <div>
                  <ArticleTitle>{title}</ArticleTitle>
                  <p>{text}</p>
                </div>
                <AdditionalInfo>
                  <NewsDate>{date}</NewsDate>
                  <ReadMoreLink href={url}>Read More</ReadMoreLink>
                </AdditionalInfo>
              </Content>
            </ShadowBox>
          </NewsItem>
        ))}
      </NewsList>
    </Wrap>
  );
};

export default NewsPage;
