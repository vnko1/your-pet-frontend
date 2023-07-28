import {
  InputSmall,
  SearchBtn,
  SearchContainer,
  SearchIcon,
} from "./SearchBar.styled";

import sprite from "../../../assets/icons.svg";

function SearchBar() {
  return (
    <SearchContainer>
      <InputSmall type="text" autoComplete="off" placeholder="Search" />
      <SearchBtn>
        <SearchIcon>
          <use href={sprite + "#search"} />
        </SearchIcon>
      </SearchBtn>
    </SearchContainer>
  );
}

export default SearchBar;
