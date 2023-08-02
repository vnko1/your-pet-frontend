import PropTypes from "prop-types";

import {
  Item,
  Content,
  NewsImg,
  ShadowBox,
  DecorationLine,
  AdditionalInfo,
  ReadMoreLink,
  NewsDate,
  ArticleTitle,
  ArticleText,
} from "./NewsItem.styled";

import placeholderImage from "../../../images/newsImagePlaceholder/image_placeholder.svg";

export function NewsItem({ imgUrl, title, text, date, url }) {
  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <Item>
      <DecorationLine></DecorationLine>
      <ShadowBox>
        <NewsImg src={imgUrl} alt="article's image" onError={onImageError} />
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
    </Item>
  );
}

NewsItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
