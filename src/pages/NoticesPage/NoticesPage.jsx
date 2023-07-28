import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NoticesPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/notices") {
      navigate("/notices/sell", { replace: true });
    }
  }, [pathname, navigate]);

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
