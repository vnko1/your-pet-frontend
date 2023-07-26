import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AddPetButton from "../AddPetButton";
import NoticesFilters from "../NoticesFilters";
import {
  LinkButton,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
} from "./NoticesCategoriesNav.styled";

const initialCategoryBtnUrl = [
  { to: "/notices/sell", label: "sell" },
  { to: "/notices/lost-found", label: "lost/found" },
  { to: "/notices/for-free", label: "in good hands" },
];

const useLoggedInButtons = () => {
  const [login, setLogin] = useState(true);
  // const [login, setLogin] = useState(false);
  const [categoryBtnUrl, setCategoryBtnUrl] = useState(initialCategoryBtnUrl);

  if (login && categoryBtnUrl.length === 3) {
    setCategoryBtnUrl((prevCategoryBtnUrl) => [
      ...prevCategoryBtnUrl,
      { to: "/notices/favorite", label: "favorite ads" },
      { to: "/notices/own", label: "my ads" },
    ]);
  }

  return {
    login,
    setLogin,
    categoryBtnUrl,
  };
};

function NoticesCategoriesNav() {
  const { login, setLogin, categoryBtnUrl } = useLoggedInButtons();
  const { pathname } = useLocation();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NoticesNavMainContainer>
        <NoticesNavWrap>
          {categoryBtnUrl.map((btn) => (
            <LinkButton key={btn.to} to={btn.to} active={pathname}>
              {btn.label}
            </LinkButton>
          ))}
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
