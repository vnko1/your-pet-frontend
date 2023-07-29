import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
import ModalNotice from "../ModalNotice";
import { useDispatch, useSelector } from "react-redux";
import {
  isLogin,
  noticesFavoriteList,
  noticesIsLoadingFavorite,
} from "../../../../redux/notices/notices-selectors";
import {
  fetchAddFavorite,
  fetchDeleteFavorite,
} from "../../../../redux/notices/notices-operations";
import { toast } from "react-hot-toast";

// тут бедет обрезаться текст города
const sliceLocation = (location) => {
  if (location.length > 4) {
    return location.slice(0, 4) + "...";
  } else {
    return location;
  }
};

// тут форматируеться возраст
const makeAge = (petDate) => {
  const date = new Date(petDate);
  const currentDate = new Date();

  const yearDifference = currentDate.getFullYear() - date.getFullYear();
  const monthDifference = currentDate.getMonth() + 1 - (date.getMonth() + 1);

  if (yearDifference >= 1) {
    return yearDifference + " year";
  } else {
    return monthDifference + " month";
  }
};

function NoticesCategoryItem({
  card: { _id, category, date, fileUrl, location, name, sex, title },
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const favList = useSelector(noticesFavoriteList);
  const isLoadingFavorite = useSelector(noticesIsLoadingFavorite);
  const isLoggedIn = useSelector(isLogin);

  useEffect(() => {
    if (isLoadingFavorite === false) {
      setIsDisabledBtn(false);
    }
  }, [isLoadingFavorite]);

  useEffect(() => {
    if (favList && favList.length > 0) {
      setIsFavorite(favList.some((item) => item === _id) ? true : false);
    } else {
      setIsFavorite(false);
    }
  }, [favList, _id]);

  const dispatch = useDispatch();

  const handleClickHeart = () => {
    // setIsDisabledBtn(true);

    if (!isLoggedIn) {
      toast.error("You need to log in to use this functionality!", {
        duration: 4000,
        position: "top-right",
      });
      return;
    } else {
      if (isFavorite) {
        setIsDisabledBtn(true);
        setIsFavorite((prev) => !prev);

        dispatch(
          fetchDeleteFavorite(
            `https://my-pet-app-8sz1.onrender.com/notices/favorites/delFavorite/${_id}`
          )
        );
      } else {
        setIsDisabledBtn(true);
        setIsFavorite((prev) => !prev);

        dispatch(
          fetchAddFavorite(
            `https://my-pet-app-8sz1.onrender.com/notices/favorites/addFavorite/${_id}`
          )
        );
      }
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Card>
      <ImageWrap>
        <Image src={`${fileUrl}`} alt={`${name}`} />
        <AddToFavorite
          disabled={isDisabledBtn}
          onClick={() => handleClickHeart()}
        >
          <HeartIconWrap isDisabledBtn={isDisabledBtn} isFavorite={isFavorite}>
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
        <Category>{category}</Category>
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
          {sliceLocation(location)}
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
          {makeAge(date)}
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
          {sex}
        </Gender>
      </ImageWrap>
      <CardTextInfoWrap>
        <Title>{title}</Title>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
      </CardTextInfoWrap>
      {modalIsOpen && (
        <ModalNotice isOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </Card>
  );
}

export default NoticesCategoryItem;

NoticesCategoryItem.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    // fileUrl: PropTypes.string.isRequired,
    fileUrl: PropTypes.string,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
