import { useSelector } from "react-redux";
import { noticesList } from "../../../../redux/notices/notices-selectors";
import NoticesCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { CardList } from "./NoticesCategoriesList.styled";

function NoticesCategoriesList() {
  const list = useSelector(noticesList);

  const isOwnPage = () => {
    const url = window.location.href;
    return url.includes("/notices/own") ? true : false;
  };

  const ownPage = isOwnPage();

  return (
    <CardList>
      {list.length > 0 &&
        list.map((card) => {
          return (
            <NoticesCategoryItem
              key={card._id}
              card={card}
              ownPage={ownPage}
            ></NoticesCategoryItem>
          );
        })}
    </CardList>
  );
}

export default NoticesCategoriesList;
