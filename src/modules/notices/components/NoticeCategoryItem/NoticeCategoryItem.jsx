import {
  AddToFavorite,
  Card,
  CardTextInfoWrap,
  Category,
  City,
  Gender,
  HeartIconWrap,
  Image,
  ImageWrap,
  LearnMoreBtn,
  Title,
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
        <AddToFavorite>
          <HeartIconWrap>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
                stroke="#54ADFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </HeartIconWrap>
        </AddToFavorite>
        <Category>In good hands</Category>
        <City>Lviv</City>
        <Years>1 year</Years>
        <Gender>female</Gender>
      </ImageWrap>
      <CardTextInfoWrap>
        <Title>Сute dog looking for a home</Title>
        <LearnMoreBtn>Learn more</LearnMoreBtn>
      </CardTextInfoWrap>
    </Card>
  );
}

export default NoticesCategoryItem;
