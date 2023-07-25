import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import ModalNotice from "../../modules/notices/components/ModalNotice/ModalNotice";
import { Container, GlobalStyles } from "../../styles";
import FontStyles from "../../styles/Fonts";
// import AddPetButton from "../../modules/notices/components/AddPetButton";

function NoticesPage() {
  return (
    <div>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <ModalNotice />
      <GlobalStyles/>
      <Container/>
      <FontStyles/>
      {/* <AddPetButton /> */}
    </div>
  );
}

export default NoticesPage;
