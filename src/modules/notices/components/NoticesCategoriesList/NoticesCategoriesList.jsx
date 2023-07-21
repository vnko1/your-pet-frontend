import NoticesCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";

function NoticesCategoriesList() {
  const arr = [1, 2, 3, 4];
  return (
    <ul
      style={{
        display: "flex",
        gap: 8,
      }}
    >
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
    </ul>
  );
}

export default NoticesCategoriesList;
