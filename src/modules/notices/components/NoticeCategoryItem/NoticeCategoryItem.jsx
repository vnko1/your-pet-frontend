import { useState } from "react";
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
import {
  ModalNoticeBox,
  ImageModalNotise,
  ModalNoticeWrap,
  CloseBtn,
  TitleModalNotice,
  ModalNoticeInfoList,
  Comments,  
  ContactBtn,
  ModelItemInfo,
  Key,
  Value,
  AddressLink,
  AddBtn,
  CommentsBold,
  CategoryModalNotice
} from "../ModalNotice/ModalNotice.styled";
// import ModalNotice from "../ModalNotice";
import Modal from "../../../../shared/modals/modalPort/Modal";


function NoticesCategoryItem() {
  // тут бедет обрезаться текст города
  // const truncatedText = el.textContent.slice(0, maxLength) + "...";
  // el.textContent = truncatedText;
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
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
        <City>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 11C20 15.4183 16.4183 19 12 21C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z"
              stroke="#54ADFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
              stroke="#54ADFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Ivano - Frankivsk */}
          Lviv
        </City>
        <Years>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.5 7V12L15.5 15M21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z"
              stroke="#54ADFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          1 year
        </Years>
        <Gender>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM12 13L12 21M9 18L15 18"
              stroke="#54ADFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          female
        </Gender>
      </ImageWrap>
      <CardTextInfoWrap>
        <Title>Сute dog looking for a home</Title>
        <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      </CardTextInfoWrap>
      {isModalOpen && <Modal toggleModal={toggleModal}>      
    <ModalNoticeBox>
      <ModalNoticeWrap>
        <ImageModalNotise
          src=" https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="cat"
        />
        <CategoryModalNotice>In good hands</CategoryModalNotice>
        <div>
          <TitleModalNotice>Сute dog looking for a home</TitleModalNotice>
          <ModalNoticeInfoList>
            <ModelItemInfo>
              <Key>Name:</Key>
              <Value>Rich</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Birthday:</Key>
              <Value>21.09.2020</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Type:</Key>
              <Value>Pomeranian</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Place:</Key>
              <Value>Lviv</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>The sex:</Key>
              <Value>male</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Email:</Key>
              <AddressLink href="mailto:user@mail.com">
                user@mail.com
              </AddressLink>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Phone:</Key>
              <AddressLink href="tel:+380971234567">+380971234567</AddressLink>
            </ModelItemInfo>
          </ModalNoticeInfoList>
        </div>
      </ModalNoticeWrap>
      <Comments>
      <CommentsBold>
        Comments:{" "}
        </CommentsBold>{" "}
        Rich would be the perfect addition to an active family that loves to
        play and go on walks. I bet he would love having a doggy playmate too!
      
      </Comments>
      <CloseBtn type="button" onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5.00004 5L19 19"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CloseBtn>
      <div>
        <ContactBtn>Contact</ContactBtn>
        <AddBtn>
          Add to
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
              stroke="#FEF9F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AddBtn>
      </div>
    </ModalNoticeBox>,   
        </Modal>}
    </Card>
  );
}

export default NoticesCategoryItem;
