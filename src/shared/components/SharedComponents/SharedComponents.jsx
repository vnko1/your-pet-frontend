import sprite from "../../../assets/icons.svg";
import {
  LearnMoreWideWhiteBtn,
  LearnMoreWideBlueBtn,
  LearnMoreSmallBlueBtn,
  LearnMoreSmallWhiteBtn,
  PawIcon,
  PawBlueIcon,
  FilterBtn,
  FilterIcon,
  LocationBtn,
  LocationIcon,
  TagsBtn,
  FavouriteBtn,
  HeartIcon,
  Input,
  InputSmall,
  SearchIcon,
  SearchBtn,
  SearchContainer,
} from "./SharedComponents.styled";

function SharedComponents() {
  return (
    <>
      <LearnMoreWideWhiteBtn>Learn more</LearnMoreWideWhiteBtn>
      <LearnMoreWideBlueBtn>
        Learn more
        <PawIcon>
          <use href={sprite + "#pawprint"} />
        </PawIcon>
      </LearnMoreWideBlueBtn>
      <LearnMoreSmallBlueBtn>
        Learn more
        <PawIcon>
          <use href={sprite + "#pawprint"} />
        </PawIcon>
      </LearnMoreSmallBlueBtn>
      <LearnMoreSmallWhiteBtn>
        Learn more
        <PawBlueIcon>
          <use href={sprite + "#pawprint"} />
        </PawBlueIcon>
      </LearnMoreSmallWhiteBtn>
      <FilterBtn>
        Filter
        <FilterIcon>
          <use href={sprite + "#filters"} />
        </FilterIcon>
      </FilterBtn>
      <LocationBtn>
        <LocationIcon>
          <use href={sprite + "#location"} />
        </LocationIcon>
        Lviv
      </LocationBtn>
      <TagsBtn>lost/found</TagsBtn>
      <FavouriteBtn>
        <HeartIcon>
          <use href={sprite + "#heart"} />
        </HeartIcon>
      </FavouriteBtn>
      <SearchContainer>
        <Input type="text" autoComplete="off" placeholder="Search" />
        <SearchBtn>
          <SearchIcon>
            <use href={sprite + "#search"} />
          </SearchIcon>
        </SearchBtn>
      </SearchContainer>
      <SearchContainer>
        <InputSmall type="text" autoComplete="off" placeholder="Search" />
        <SearchBtn>
          <SearchIcon>
            <use href={sprite + "#search"} />
          </SearchIcon>
        </SearchBtn>
      </SearchContainer>
    </>
  );
}

export default SharedComponents;
