import { useLocation } from "react-router-dom";
import AddPetButton from "../AddPetButton";
// import NoticesFilters from "../NoticesFilters";
import {
  LinkButton,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
} from "./NoticesCategoriesNav.styled";

// import { Link } from "react-router-dom";

const categoryBtn = [
  { to: "/notices/sell", label: "sell" },
  { to: "/notices/lost-found", label: "lost/found" },
  { to: "/notices/for-free", label: "in good hands" },
  // тут допуш в массив при авторизации
  { to: "/notices/favorite", label: "favorite ads" },
  { to: "/notices/own", label: "my ads" },
];

// navigate("/notices/sell", { replace: true });

function NoticesCategoriesNav() {
  // activeLink будет вибираться по url і сравниваться

  const { pathname } = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NoticesNavMainContainer>
        <NoticesNavWrap>
          {categoryBtn.map((btn) => {
            return (
              <LinkButton key={btn.to} to={btn.to} active={pathname}>
                {btn.label}
              </LinkButton>
            );
          })}
          {/* <Button>sell</Button>
          <Button>lost/found</Button>
          <Button>in good hands</Button>
          <Button>favorite ads</Button>
          <Button>my ads</Button> */}
        </NoticesNavWrap>
        <FilterAndAddPetBtnWrap>
          {/* <NoticesFilters /> */}
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

// <Route path="notices/:categoryName" element={<NoticesPage />}>
//   <Route path="sell" element={<List />} />
//   <Route path="lost-found" element={<List />} />
//   <Route path="for-free" element={<List />} />
// </Route>
