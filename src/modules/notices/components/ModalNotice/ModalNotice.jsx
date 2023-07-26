import { createPortal } from "react-dom";
import {
  ModalNoticeBox,
  Image,
  ModalNoticeWrap,
  CloseBtn,
  Title,
  ModalNoticeInfoList,
  Comments,  
  ContactBtn,
  ModelItemInfo,
  Key,
  Value,
  AddressLink,
  AddBtn,
  CommentsBold,
  ModalNoticeBackdrop,
  Category
} from "./ModalNotice.styled";

const ModalNotice = ({ closeModal}) => {  

  return createPortal(
    <ModalNoticeBackdrop>
    <ModalNoticeBox>
      <ModalNoticeWrap>
        <Image
          src=" https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="cat"
        />
        <Category>In good hands</Category>
        <div>
          <Title>Сute dog looking for a home</Title>
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
      <CloseBtn type="button" onClick={closeModal}>
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
    </ModalNoticeBox>
    </ModalNoticeBackdrop>,
    document.getElementById('modal-root')
  );
};

export default ModalNotice;
