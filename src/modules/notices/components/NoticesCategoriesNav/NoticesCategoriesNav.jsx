import { useEffect } from "react";
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
import { fetchNotices } from "../../../../redux/notices/notices-operations";
import useFilter from "../NoticesFilters/useFilter";
import useNavButtons from "./hook/useNavButtons";

function NoticesCategoriesNav() {
  const { categoryBtnsUrl, activeButton, setActiveButton } = useNavButtons();
  const { search, resetInput } = useSearch();

  const { filterState, setFilterState, resetFilter } = useFilter();

  const dispatch = useDispatch();

  const url = window.location.href;

  useEffect(() => {
    const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/searchQuery";

    if (url.includes("date") || url.includes("sex")) {
      // console.log("renderNav");
      const newArr = url.split("?");
      newArr.shift();
      const query = newArr.map((query) => query.replace(/%2C/g, ","));
      const filterQuery = query.join("&");

      const fetchUrl = `${baseUrl}?page=1&limit=9&category=${activeButton}&${filterQuery}`;

      // console.log("fetchUrl", fetchUrl);

      dispatch(fetchNotices(fetchUrl));
    } else {
      const fetchUrl = search
        ? `${baseUrl}?page=1&limit=9&category=${activeButton}&filter=${search}`
        : `${baseUrl}?page=1&limit=9&category=${activeButton}`;
      dispatch(fetchNotices(fetchUrl));
    }
  }, [activeButton, dispatch, search, url]);

  const resetAllSearchQuery = (btn) => {
    resetFilter();
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
              onClick={() => resetAllSearchQuery(btn.to)}
            >
              {btn.label}
            </LinkButton>
          ))}
        </NoticesNavWrap>
        <FilterAndAddPetBtnWrap>
          <NoticesFilters
            filterState={filterState}
            setFilterState={setFilterState}
          />
          <AddPetButton />
        </FilterAndAddPetBtnWrap>
      </NoticesNavMainContainer>
    </div>
  );
}

export default NoticesCategoriesNav;
