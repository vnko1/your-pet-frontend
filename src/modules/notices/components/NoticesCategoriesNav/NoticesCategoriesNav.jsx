import { useLocation } from "react-router-dom";
import AddPetButton from "../AddPetButton";
import NoticesFilters from "../NoticesFilters";
import {
  LinkButton,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
} from "./NoticesCategoriesNav.styled";
import { useState } from "react";

// import { Link } from "react-router-dom";

const initialCategoryBtnUrl = [
  { to: "/notices/sell", label: "sell" },
  { to: "/notices/lost-found", label: "lost/found" },
  { to: "/notices/for-free", label: "in good hands" },
];

function NoticesCategoriesNav() {
  // тут допуш в массив при авторизации
  const [login, setLogin] = useState(true);
  const [categoryBtnUrl, setCategoryBtnUrl] = useState(initialCategoryBtnUrl);

  if (login && categoryBtnUrl.length === 3) {
    setCategoryBtnUrl((prevCategoryBtnUrl) => [
      ...prevCategoryBtnUrl,
      { to: "/notices/favorite", label: "favorite ads" },
      { to: "/notices/own", label: "my ads" },
    ]);
  }

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
          {categoryBtnUrl.map((btn) => {
            return (
              <LinkButton key={btn.to} to={btn.to} active={pathname}>
                {btn.label}
              </LinkButton>
              // <button onClick={func}></button>
              // function fn(params) {
              // navigate('sadadsa');
              // searchparams reset
              // }
            );
          })}
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
