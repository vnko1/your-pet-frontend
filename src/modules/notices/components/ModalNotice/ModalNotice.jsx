import PropTypes from "prop-types";
import {
  ModalNoticeBox,
  Image,
  ModalNoticeWrap,
  CloseBtn,
  Title,
  ModalNoticeInfoList,
  Comments,
  ModelItemInfo,
  Key,
  Value,
  AddressLink,
  AddBtn,
  CommentsBold,
  Category,
  ContactLink,
} from "./ModalNotice.styled";
import { useSelector } from "react-redux";
import { noticesCardById } from "../../../../redux/notices/notices-selectors";
import icons from "../../../../assets/icons.svg";

function formatDate(inputDate) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}

const ModalNotice = ({
  handleClickHeart,
  toggleModal,
  isFavorite,
  isDisabledBtn,
}) => {
  const {
    name,
    category,
    date,
    fileUrl,
    comments,
    title,
    sex,
    location,
    type,
    email = "user@qwe.qwe",
    phone = "+380971234567",
  } = useSelector(noticesCardById);

  return (
    <ModalNoticeBox>
      <ModalNoticeWrap>
        <Image src={fileUrl} alt={name} />
        <Category>{category}</Category>
        <div>
          <Title>{title}</Title>
          <ModalNoticeInfoList>
            <ModelItemInfo>
              <Key>Name:</Key>
              <Value>{name}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Birthday:</Key>
              <Value>{formatDate(date)}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Type:</Key>
              <Value>{type}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Place:</Key>
              <Value>{location}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>The sex:</Key>
              <Value>{sex}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Email:</Key>
              <AddressLink href={email}>{email}</AddressLink>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Phone:</Key>
              <AddressLink href={phone}>{phone}</AddressLink>
            </ModelItemInfo>
          </ModalNoticeInfoList>
        </div>
      </ModalNoticeWrap>
      <Comments>
        <CommentsBold>Comments: </CommentsBold> {comments}
      </Comments>
      <CloseBtn type="button" onClick={toggleModal}>
      <svg width="24" height="24">
            <use href={ icons + "#cross-small"} />
          </svg>
        {/* <svg
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
        </svg> */}
      </CloseBtn>
      <div>
        <ContactLink href="tel:+380971234567">Contact</ContactLink>
        <AddBtn disabled={isDisabledBtn} onClick={() => handleClickHeart()}>
          Add to
          <svg width="24" height="24">
            <use href={ icons + "#heart"} stroke="#FEF9F9"/>
          </svg>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorite ? "white" : "green"}
          >
            <path
              d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
              stroke={isFavorite ? "white" : "green"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            /> */}
          {/* </svg> */}
        </AddBtn>
      </div>
    </ModalNoticeBox>
  );
};

export default ModalNotice;

ModalNotice.propTypes = {
  handleClickHeart: PropTypes.func.isRequired,
  isDisabledBtn: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
