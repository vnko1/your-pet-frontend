import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavorite,
  resetNotices,
} from "../../redux/notices/notices-operations";
import { isLogin } from "../../redux/notices/notices-selectors";
import { NoticesContainer } from "./NoticesPage.styled";

function NoticesPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLogin);

  const dispatch = useDispatch();

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
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </NoticesContainer>
  );
}

export default NoticesPage;
