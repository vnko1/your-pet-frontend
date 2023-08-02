import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import PetsList from "../PetsList/PetsList";

import authSelectors from "../../../../redux/auth/auth-selectors";
import { selectPetsIsLoading } from "../../../../redux/pets/pets-selectors";

import Loader from "../../../../shared/loader/Loader";
import {
  UserPetsBody,
  UserPetsTitleWrap,
  UserPetsTitle,
  UserPetsNavBtn,
  NoUserPets,
} from "./PetsData.styled";

const PetsData = () => {
  const { pets } = useSelector(authSelectors.selectUser);
  const isLoading = useSelector(selectPetsIsLoading);

  return (
    <UserPetsBody>
      <UserPetsTitleWrap>
        <UserPetsTitle>My pets:</UserPetsTitle>
        <NavLink to={`/add-pet`}>
          <UserPetsNavBtn>Add Pet +</UserPetsNavBtn>
        </NavLink>
      </UserPetsTitleWrap>
      {isLoading ? (
        <Loader />
      ) : !pets || pets.length === 0 ? (
        <NoUserPets>
          You have not added a pet yet, you have the option to add your furry
          friend!
        </NoUserPets>
      ) : (
        <PetsList />
      )}
    </UserPetsBody>
  );
};

export default PetsData;
