import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavorite,
  resetNotices,
} from "../../redux/notices/notices-operations";
import {
  isLogin,
  noticesList,
  noticesTotal,
} from "../../redux/notices/notices-selectors";
import { NoticesContainer } from "./NoticesPage.styled";
import Pagination from "./Pagination";

function NoticesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLogin);
  const totalPages = useSelector(noticesTotal);
  console.log("totalPages", totalPages);
  console.log("currentPage", currentPage);
  const noticesListInPagination = useSelector(noticesList);
  const dispatch = useDispatch();

  const isPagination = noticesListInPagination.length > 0 ? true : false;

  // useEffect(() => {
  //   if (totalPages <= 9) {
  //     setCurrentPage(1);
  //   } else {
  //     setCurrentPage(Math.ceil(totalPages / 9));
  //   }
  // }, [setCurrentPage, totalPages]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        fetchFavorite("https://my-pet-app-8sz1.onrender.com/notices/favorites")
      );
    } else {
      // при розлогине надо очистить массив фейворит но лучше поставить на кнопку логаут
      dispatch(resetNotices());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (pathname === "/notices") {
      navigate("/notices/sell", { replace: true });
    }
  }, [pathname, navigate, dispatch]);

  return (
    <NoticesContainer>
      <NoticesSearch />
      <NoticesCategoriesNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NoticesCategoriesList />
      {isPagination && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </NoticesContainer>
  );
}

export default NoticesPage;
