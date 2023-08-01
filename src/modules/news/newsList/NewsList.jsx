import { List } from "./NewsList.styled";

import { useSelector } from "react-redux";
import { selectNews } from "../../../redux/news/news-selectors";

import NewsItem from "../newsItem";

export function NewsList() {
  const news = useSelector(selectNews);

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
    </List>
  );
}
