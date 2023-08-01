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
  ArticleText,
} from "./NewsPage.styled";
import SearchBar from "../../shared/components/SharedComponents/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNews,
  selectNewsFilter,
  selectTotalArticles,
} from "../../redux/news/news-selectors";
import { useEffect, useState } from "react";
import { getNews } from "../../redux/news/news-operation";
import Pagination from "./Pagination";
import placeholderImage from "../../images/newsImagePlaceholder/image_placeholder.svg";

export function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const request = useSelector(selectNewsFilter);
  const totalArticles = useSelector(selectTotalArticles);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getNews({ filter: request, page: currentPage }));
  }, [currentPage, dispatch, request]);

  useEffect(() => {
    if (totalArticles > 0 && news.length === 0 && currentPage !== 1) {
      setCurrentPage((prev) => (prev -= 1));
    }
  }, [currentPage, news.length, totalArticles]);

  const handleInitialPage = () => {
    dispatch(getNews({ filter: "", page: 1 }));
    setCurrentPage(1);
  };

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  const isPagination = news.length > 0 ? true : false;

  return (
    <Wrap>
      <Title onClick={handleInitialPage}>News</Title>
      <SearchBar setCurrentPage={setCurrentPage} />
      <NewsList>
        {news.map(({ _id, imgUrl, title, text, date, url }) => (
          <NewsItem key={_id}>
            <DecorationLine></DecorationLine>
            <ShadowBox>
              <NewsImg
                src={imgUrl}
                alt="article's image"
                onError={onImageError}
              />
              <Content>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleText>{text}</ArticleText>

                <AdditionalInfo>
                  <NewsDate>{date}</NewsDate>
                  <ReadMoreLink href={url} target="_blank">
                    Read More
                  </ReadMoreLink>
                </AdditionalInfo>
              </Content>
            </ShadowBox>
          </NewsItem>
        ))}
      </NewsList>
      <div>
        {isPagination && (
          <Pagination
            totalItems={totalArticles}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </Wrap>
  );
}

export default NewsPage;
