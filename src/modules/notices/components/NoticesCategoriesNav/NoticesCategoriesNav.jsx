import { useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddPetButton from "../AddPetButton";
import NoticesFilters from "../NoticesFilters";
import {
  LinkButton,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
} from "./NoticesCategoriesNav.styled";
import useSearch from "../NoticesSearch/hook/useSearch";
import { useDispatch } from "react-redux";
// import { fetchNotices } from "redux/notices/notices-operations";
import { fetchNotices } from "../../../../redux/notices/notices-operations";

const initialCategoryBtnUrl = [
  { to: "sell", label: "sell" },
  { to: "lost-found", label: "lost-found" },
  { to: "for-free", label: "in good hands" },
];

const useNavButtons = () => {
  const [login, setLogin] = useState(true);
  const [categoryBtnsUrl, setCategoryBtnsUrl] = useState(initialCategoryBtnUrl);
  const [activeButton, setActiveButton] = useState(() => {
    const fullURL = window.location.href;

    if (fullURL.includes("/notices/")) {
      const parts = fullURL.split("/");
      console.log(parts);
      const categoryValue = parts[parts.length - 1];
      console.log(categoryValue);

      return categoryValue;
    } else {
      return "sell";
    }
  });

  if (login && categoryBtnsUrl.length === 3) {
    setCategoryBtnsUrl((prevCategoryBtnUrl) => [
      ...prevCategoryBtnUrl,
      { to: "favorite", label: "favorite ads" },
      { to: "own", label: "my ads" },
    ]);
  }

  return {
    login,
    setLogin,
    categoryBtnsUrl,
    activeButton,
    setActiveButton,
  };
};

function NoticesCategoriesNav() {
  const { login, setLogin, categoryBtnsUrl, activeButton, setActiveButton } =
    useNavButtons();
  const { search, resetInput } = useSearch();

  const dispatch = useDispatch();

  useEffect(() => {
    const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/searchQuery";
    const url = search
      ? `${baseUrl}?page=1&limit=9&category=${activeButton}&filter=${search}`
      : `${baseUrl}?page=1&limit=9&category=${activeButton}`;

    // fetch(url)
    //   .then((data) => data.json())
    //   .then(console.log);
    dispatch(fetchNotices(url));
  }, [activeButton, dispatch, search]);

  const resetSearchQuery = (btn) => {
    resetInput();
    setActiveButton(btn);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NoticesNavMainContainer>
        <NoticesNavWrap>
          {categoryBtnsUrl.map((btn) => (
            <LinkButton
              key={btn.to}
              to={btn.to}
              active={activeButton}
              onClick={() => resetSearchQuery(btn.to)}
            >
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
