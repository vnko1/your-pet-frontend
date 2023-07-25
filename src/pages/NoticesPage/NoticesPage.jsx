import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import ModalNotice from "../../modules/notices/components/ModalNotice/ModalNotice";
// import AddPetButton from "../../modules/notices/components/AddPetButton";

function NoticesPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log("pathname", pathname);

  useEffect(() => {
    if (pathname === "/notices") {
      navigate("/notices/sell", { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <div>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      {/* <ModalNotice /> */}
     
      {/* <AddPetButton /> */}
    </div>
  );
}

export default NoticesPage;
