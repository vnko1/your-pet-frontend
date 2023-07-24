import AddPetButton from "../AddPetButton";
import NoticesFilters from "../NoticesFilters";
import {
  Button,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
} from "./NoticesCategoriesNav.styled";

// import { Link } from "react-router-dom";

function NoticesCategoriesNav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NoticesNavMainContainer>
        <NoticesNavWrap>
          {/* <Link to={ссилка-путь}>тут буде назва путя</Link> */}
          <Button>sell</Button>
          <Button>lost/found</Button>
          <Button>in good hands</Button>
          {/* возможно массив в каторый при логине буду допушовать еще 2 значения */}
          <Button>favorite ads</Button>
          <Button>my ads</Button>
        </NoticesNavWrap>
        <FilterAndAddPetBtnWrap>
          <NoticesFilters />
          <AddPetButton />
        </FilterAndAddPetBtnWrap>
      </NoticesNavMainContainer>
    </div>
  );
}

export default NoticesCategoriesNav;

// "Компонент рендерить блок навіції з маршрутами:
//   - /notices/sell -  відкриває на сторінці компонент NoticesCategoryList зі списком оголошеннь з продажу
//   - /notices/lost-found - відкриває на сторінці компонент NoticesCategoryList зі списком оголошеннь з знайшов/шукаю
//   - /notices/for-free - відкриває на сторінці компонент NoticesCategoryList зі списком оголошеннь з віддам в добрі руки"

// Авторизований ще +

// "Компонент рендерить блок навігації з маршрутами:
//   - /notices/favorite -  відкриває на сторінці компонент NoticesCategoryList зі списком оголошень, доданих до обраних
//   - /notices/own - відкриває на сторінці компонент NoticesCategoryList зі списком оголошень, створених користувачем"
