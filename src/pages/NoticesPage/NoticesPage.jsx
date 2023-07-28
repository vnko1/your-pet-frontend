import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFavorite } from "../../redux/notices/notices-operations";

function NoticesPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchFavorite(
        "https://my-pet-app-8sz1.onrender.com/notices/owner/favorite"
      )
    );
  }, [dispatch]);

  useEffect(() => {
    if (pathname === "/notices") {
      navigate("/notices/sell", { replace: true });
    }
  }, [pathname, navigate, dispatch]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </div>
  );
}

export default NoticesPage;
