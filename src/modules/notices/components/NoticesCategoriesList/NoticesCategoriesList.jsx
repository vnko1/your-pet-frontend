import { useSelector } from "react-redux";
import { noticesList } from "../../../../redux/notices/notices-selectors";
import NoticesCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { CardList } from "./NoticesCategoriesList.styled";

function NoticesCategoriesList() {
  const list = useSelector(noticesList);

  return (
    <CardList>
      {list &&
        list.map((card) => {
          return (
            <NoticesCategoryItem
              key={card._id}
              card={card}
            ></NoticesCategoryItem>
          );
        })}
    </CardList>
  );
}

export default NoticesCategoriesList;
