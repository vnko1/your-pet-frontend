import {
  AddToFavorite,
  Card,
  Category,
  City,
  Gender,
  Image,
  ImageWrap,
  Years,
} from "./NoticeCategoryItem.styled";


function NoticesCategoryItem() {
  return (
    <Card>
      <ImageWrap>
        <Image   
          src="
https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="cat"
        />
        <AddToFavorite>Add f</AddToFavorite>
        <Category>In good hands</Category>
        <City>Lviv</City>
        <Years>1 year</Years>
        <Gender>female</Gender>
      </ImageWrap>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: "20px 24px",
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,

            fontFamily: "Manrope",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Сute dog looking for a home
        </h2>
        <button
          style={{
            display: "flex",
            width: 248,
            padding: "8px 28px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            border: "2px solid #54ADFF",
          }}
        >
          Learn more
        </button>
      </div>
    </Card>
  );
}

export default NoticesCategoryItem;
