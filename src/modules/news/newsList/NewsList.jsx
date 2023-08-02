import { List, EmptyError } from "./NewsList.styled";

import { useSelector } from "react-redux";
import {
  selectNews,
  selectTotalArticles,
  selectIsLoading,
} from "../../../redux/news/news-selectors";

import NewsItem from "../newsItem";

export function NewsList() {
  const news = useSelector(selectNews);
  const totalArticles = useSelector(selectTotalArticles);
  const isLoading = useSelector(selectIsLoading);

  return (
    <List>
      {news.map(({ _id, imgUrl, title, text, date, url }) => (
        <NewsItem
          key={_id}
          imgUrl={imgUrl}
          title={title}
          text={text}
          date={date}
          url={url}
        />
      ))}
      {news.length === 0 && !isLoading && totalArticles === 0 && (
        <EmptyError>
          Sorry, but we did not find any news with such request. Try changing
          the search query.
        </EmptyError>
      )}
    </List>
  );
}
