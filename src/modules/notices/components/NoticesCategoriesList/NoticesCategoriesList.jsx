import NoticesCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { CardList } from "./NoticesCategoriesList.styled";

function NoticesCategoriesList() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <CardList>
      {arr &&
        arr.map((card) => {
          return (
            <NoticesCategoryItem
              key={card}
              style={{
                width: 288,
                height: 456,
                backgroundColor: "gray",
              }}
            >
              {card}
            </NoticesCategoryItem>
          );
        })}
    </CardList>
  );
}

export default NoticesCategoriesList;
