import { NavLink } from "react-router-dom";
import {
  UserPetsBody,
  UserPetsBtn,
  NoUserPets,
  UserPetsImg,
  UserPetsInfo,
  UserPetsItem,
  UserPetsItemSpan,
  UserPetsList,
  UserPetsNavBtn,
  UserPetsTitle,
  UserPetsTitleWrap,
  UserPetsBtnDell,
} from "./PetsData.styled";
const PetsData = () => {
  return (
    <UserPetsBody>
      <div>
        <UserPetsTitleWrap>
          <UserPetsTitle>My pets:</UserPetsTitle>
          <NavLink>
            <UserPetsNavBtn>Add Pet +</UserPetsNavBtn>
          </NavLink>
        </UserPetsTitleWrap>
        <NoUserPets>
          You havenot added a pet yet, you have the option to add your furry
          friend!
        </NoUserPets>
        <UserPetsInfo>
          <UserPetsImg src alt="pet_image" />
          <UserPetsBtnDell>
            <svg />
          </UserPetsBtnDell>
          <UserPetsList>
            <UserPetsItem>
              Name: <UserPetsItemSpan> {}</UserPetsItemSpan>
            </UserPetsItem>
            <UserPetsItem>
              Date of birth: <UserPetsItemSpan> {}</UserPetsItemSpan>
            </UserPetsItem>
            <UserPetsItem>
              Breed: <UserPetsItemSpan> {}</UserPetsItemSpan>
            </UserPetsItem>
            <UserPetsItem>
              Comments: <UserPetsItemSpan>{}</UserPetsItemSpan>
            </UserPetsItem>
          </UserPetsList>
          <UserPetsBtn type="button">
            <svg />
          </UserPetsBtn>
        </UserPetsInfo>
      </div>
    </UserPetsBody>
  );
};

export default PetsData;
