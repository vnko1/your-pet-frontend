import {
  InputSmall,
  SearchBtn,
  SearchForm,
  SearchIcon,
} from "./SearchBar.styled";

import sprite from "../../../assets/icons.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { selectNews } from "../../../redux/news/news-selectors";
import { getNews } from "../../../redux/news/news-operation";

function SearchBar() {
  const [searchRequest, setSearchRequest] = useState("");

  const dispatch = useDispatch();
  // const news = useSelector(selectNews);

  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);

  const inputChange = ({ target: { value } }) => {
    return setSearchRequest(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("searchRequest", searchRequest);
    // dispatch(getNews({ filter: searchRequest }));
    dispatch(getNews(searchRequest));
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <InputSmall
        type="text"
        autoComplete="off"
        placeholder="Search"
        onChange={inputChange}
        value={searchRequest}
      />
      <SearchBtn>
        <SearchIcon>
          <use href={sprite + "#search"} />
        </SearchIcon>
      </SearchBtn>
    </SearchForm>
  );
}

export default SearchBar;
