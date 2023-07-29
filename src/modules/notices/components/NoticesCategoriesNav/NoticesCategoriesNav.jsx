import { useEffect } from "react";
import AddPetButton from "../AddPetButton";
import NoticesFilters from "../NoticesFilters";
import {
  LinkButton,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
  FilterCategoryBtn,
  FilterCategoryWrap,
  FilterCategoryText,
} from "./NoticesCategoriesNav.styled";
import useSearch from "../NoticesSearch/hook/useSearch";
import { useDispatch } from "react-redux";
import { fetchNotices } from "../../../../redux/notices/notices-operations";
import useFilter from "./hooks/useFilter";
import useNavButtons from "./hooks/useNavButtons";
import icons from "../../../../assets/icons.svg";

// useEffect(() => {
//   const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/searchQuery";

//   if (
//     url.includes("/notices/sell") ||
//     url.includes("/notices/lost-found") ||
//     url.includes("/notices/for-free")
//   ) {
//     if (url.includes("date") || url.includes("sex")) {
//       const newArr = url.split("?");
//       newArr.shift();
//       const query = newArr.map((query) => query.replace(/%2C/g, ","));
//       const filterQuery = query.join("&");

//       const fetchUrl = `${baseUrl}?page=1&limit=9&category=${activeButton}&${filterQuery}`;

//       dispatch(fetchNotices(fetchUrl));
//     } else {
//       const fetchUrl = search
//         ? `${baseUrl}?page=1&limit=9&category=${activeButton}&filter=${search}`
//         : `${baseUrl}?page=1&limit=9&category=${activeButton}`;
//       dispatch(fetchNotices(fetchUrl));
//     }
//   } else if (
//     url.includes("/notices/favorite") ||
//     url.includes("/notices/own")
//   ) {
//     const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/";
//     if (url.includes("date") || url.includes("sex")) {
//       console.log(12345);
//       // console.log("renderNav");
//       const newArr = url.split("?");
//       newArr.shift();
//       const query = newArr.map((query) => query.replace(/%2C/g, ","));
//       const filterQuery = query.join("&");

//       if (url.includes("/notices/favorite")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner/favorite?page=1&limit=9&filter=${search}&${filterQuery}`
//           : `${baseUrl}owner/favorite?page=1&limit=9&${filterQuery}`;
//         dispatch(fetchNotices(fetchUrl));
//       } else if (url.includes("/notices/own")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner?page=1&limit=9&filter=${search}&${filterQuery}`
//           : `${baseUrl}owner?page=1&limit=9&${filterQuery}`;
//         dispatch(fetchNotices(fetchUrl));
//       }
//     } else {
//       if (url.includes("/notices/favorite")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner/favorite?page=1&limit=9&filter=${search}`
//           : `${baseUrl}owner/favorite?page=1&limit=9`;
//         dispatch(fetchNotices(fetchUrl));
//       } else if (url.includes("/notices/own")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner?page=1&limit=9&filter=${search}`
//           : `${baseUrl}owner?page=1&limit=9`;
//         dispatch(fetchNotices(fetchUrl));
//       }
//     }
//   }
// }, [activeButton, dispatch, search, url]);

// useEffect(() => {
//   const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/searchQuery";

//   if (
//     url.includes("/notices/sell") ||
//     url.includes("/notices/lost-found") ||
//     url.includes("/notices/for-free")
//   ) {
//     if (url.includes("date") || url.includes("sex")) {
//       const newArr = url.split("?");
//       newArr.shift();
//       const query = newArr.map((query) => query.replace(/%2C/g, ","));
//       const filterQuery = query.join("&");

//       const fetchUrl = `${baseUrl}?page=1&limit=9&category=${activeButton}&${filterQuery}`;

//       dispatch(fetchNotices(fetchUrl));
//     } else {
//       const fetchUrl = search
//         ? `${baseUrl}?page=1&limit=9&category=${activeButton}&filter=${search}`
//         : `${baseUrl}?page=1&limit=9&category=${activeButton}`;
//       dispatch(fetchNotices(fetchUrl));
//     }
//   } else if (
//     url.includes("/notices/favorite") ||
//     url.includes("/notices/own")
//   ) {
//     const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/";
//     if (url.includes("date") || url.includes("sex")) {
//       console.log(12345);
//       // console.log("renderNav");
//       const newArr = url.split("?");
//       newArr.shift();
//       const query = newArr.map((query) => query.replace(/%2C/g, ","));
//       const filterQuery = query.join("&");

//       if (url.includes("/notices/favorite")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner/favorite?page=1&limit=9&filter=${search}&${filterQuery}`
//           : `${baseUrl}owner/favorite?page=1&limit=9&${filterQuery}`;
//         dispatch(fetchNotices(fetchUrl));
//       } else if (url.includes("/notices/own")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner?page=1&limit=9&filter=${search}&${filterQuery}`
//           : `${baseUrl}owner?page=1&limit=9&${filterQuery}`;
//         dispatch(fetchNotices(fetchUrl));
//       }
//     } else {
//       if (url.includes("/notices/favorite")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner/favorite?page=1&limit=9&filter=${search}`
//           : `${baseUrl}owner/favorite?page=1&limit=9`;
//         dispatch(fetchNotices(fetchUrl));
//       } else if (url.includes("/notices/own")) {
//         const fetchUrl = search
//           ? `${baseUrl}owner?page=1&limit=9&filter=${search}`
//           : `${baseUrl}owner?page=1&limit=9`;
//         dispatch(fetchNotices(fetchUrl));
//       }
//     }
//   }
// }, [activeButton, dispatch, search, url]);

function NoticesCategoriesNav() {
  const { categoryBtnsUrl, activeButton, setActiveButton } = useNavButtons();
  const { search, resetInput } = useSearch();

  const { filterState, setFilterState, resetFilter } = useFilter();

  const { isBeforeOneYear, isUpOneYear, isUpTwoYear, isFemale, isMale } =
    filterState;
  const {
    setIsBeforeOneYear,
    setIsUpOneYear,
    setIsUpTwoYear,
    setIsFemale,
    setIsMale,
  } = setFilterState;

  const dispatch = useDispatch();

  const url = window.location.href;

  useEffect(() => {
    const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices/";

    let fetchUrl;
    const filterQuery = search
      ? url.split("?")[1]?.replace(/%2C/g, ",").replace("search", "filter")
      : url.split("?")[1]?.replace(/%2C/g, ",");

    const commonParams = filterQuery ? `&${filterQuery}` : "";

    if (
      url.includes("/notices/sell") ||
      url.includes("/notices/lost-found") ||
      url.includes("/notices/for-free")
    ) {
      fetchUrl = `${baseUrl}?category=${activeButton}&page=1&limit=9${commonParams}`;
    } else if (url.includes("/notices/favorite")) {
      fetchUrl = `${baseUrl}favorites?page=1&limit=9${commonParams}`;
    } else if (url.includes("/notices/own")) {
      fetchUrl = `${baseUrl}owner?page=1&limit=9${commonParams}`;
    }

    if (fetchUrl) {
      dispatch(fetchNotices(fetchUrl));
    }
  }, [activeButton, dispatch, search, url]);

  const resetAllSearchQuery = (btn) => {
    resetFilter();
    resetInput();
    setActiveButton(btn);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:
          isBeforeOneYear || isUpOneYear || isUpTwoYear || isFemale || isMale
            ? 8
            : 0,
        marginBottom: 24,
      }}
    >
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
      {/* тут будет по условию кнопки сброса фильтра */}
      <FilterCategoryWrap>
        {isBeforeOneYear && (
          <FilterCategoryBtn onClick={() => setIsBeforeOneYear(false)}>
            <FilterCategoryText>3-12m</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isUpOneYear && (
          <FilterCategoryBtn onClick={() => setIsUpOneYear(false)}>
            <FilterCategoryText>1 year</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isUpTwoYear && (
          <FilterCategoryBtn onClick={() => setIsUpTwoYear(false)}>
            <FilterCategoryText>2 year</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isFemale && (
          <FilterCategoryBtn onClick={() => setIsFemale(false)}>
            <FilterCategoryText>female</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isMale && (
          <FilterCategoryBtn onClick={() => setIsMale(false)}>
            <FilterCategoryText>male</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
      </FilterCategoryWrap>
    </div>
  );
}

export default NoticesCategoriesNav;
