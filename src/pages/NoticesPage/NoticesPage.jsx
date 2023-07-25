import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import ModalNotice from "../../modules/notices/components/ModalNotice/ModalNotice";
// import AddPetButton from "../../modules/notices/components/AddPetButton";

function NoticesPage() {
  return (
    <div>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <ModalNotice />
      {/* <AddPetButton /> */}
    </div>
  );
}

export default NoticesPage;
