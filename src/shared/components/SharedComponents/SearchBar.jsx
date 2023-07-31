import {
  InputSmall,
  SearchBtn,
  SearchForm,
  SearchIcon,
} from "./SearchBar.styled";

import sprite from "../../../assets/icons.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../../../redux/news/news-operation";
import { changeFilter } from "../../../redux/news/news-slice";
import { changePage } from "../../../redux/news/news-slice";

function SearchBar() {
  const [searchRequest, setSearchRequest] = useState("");

  const dispatch = useDispatch();

  const inputChange = ({ target: { value } }) => {
    return setSearchRequest(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(changePage(1));
    dispatch(changeFilter(searchRequest));

    dispatch(getNews({ filter: searchRequest, page: 1 }));
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
