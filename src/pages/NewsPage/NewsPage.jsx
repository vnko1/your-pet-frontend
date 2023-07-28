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

export const NewsPage = () => {
  return (
    <Wrap>
      <Title>News</Title>
      <SearchBar />
      <NewsList>
        <NewsItem>
          <DecorationLine></DecorationLine>
          <ShadowBox>
            <NewsImg
              src="https://www.nytimes.com/images/2023/05/04/multimedia/04evening-nl-WH/04evening-nl-WH-blog480-v3.jpg"
              alt="article's image"
            />
            <Content>
              <div>
                <ArticleTitle>Template</ArticleTitle>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, tempore ab? Fugiat praesentium expedita
                  asperiores ex corporis dolorem quibusdam dolore voluptatum
                  nihil deleniti, cupiditate placeat nam nesciunt ab maiores
                  consectetur molestiae fuga.
                </p>
              </div>
              <AdditionalInfo>
                <NewsDate>date</NewsDate>
                <ReadMoreLink href="/">Read More</ReadMoreLink>
              </AdditionalInfo>
            </Content>
          </ShadowBox>
        </NewsItem>
        <NewsItem>
          <DecorationLine></DecorationLine>
          <ShadowBox>
            <NewsImg
              src="https://www.nytimes.com/images/2023/05/04/multimedia/04evening-nl-WH/04evening-nl-WH-blog480-v3.jpg"
              alt="article's image"
            />
            <Content>
              <div>
                <ArticleTitle>Template</ArticleTitle>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, tempore ab? Fugiat praesentium expedita
                  asperiores ex corporis dolorem quibusdam dolore voluptatum
                  nihil deleniti, cupiditate placeat nam nesciunt ab maiores
                  consectetur molestiae fuga.
                </p>
              </div>
              <AdditionalInfo>
                <NewsDate>date</NewsDate>
                <ReadMoreLink href="/">Read More</ReadMoreLink>
              </AdditionalInfo>
            </Content>
          </ShadowBox>
        </NewsItem>
        <NewsItem>
          <DecorationLine></DecorationLine>
          <ShadowBox>
            <NewsImg
              src="https://www.nytimes.com/images/2023/05/04/multimedia/04evening-nl-WH/04evening-nl-WH-blog480-v3.jpg"
              alt="article's image"
            />
            <Content>
              <div>
                <ArticleTitle>Template</ArticleTitle>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, tempore ab? Fugiat praesentium expedita
                  asperiores ex corporis dolorem quibusdam dolore voluptatum
                  nihil deleniti, cupiditate placeat nam nesciunt ab maiores
                  consectetur molestiae fuga.
                </p>
              </div>
              <AdditionalInfo>
                <NewsDate>date</NewsDate>
                <ReadMoreLink href="/">Read More</ReadMoreLink>
              </AdditionalInfo>
            </Content>
          </ShadowBox>
        </NewsItem>
      </NewsList>
    </Wrap>
  );
};

export default NewsPage;
