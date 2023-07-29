import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { deletePet } from "../../../../redux/pets/pets-operation";

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
  UserPetsSvg,
} from "./PetsData.styled";

import authSelectors from "../../../../redux/auth/auth-selectors";

import sprite from "../../../../assets/icons/icons.svg";

const PetsData = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pets } = useSelector(authSelectors.selectUser);

  const handelDellPets = (id) => {
    dispatch(deletePet(id));
  };

  return (
    <UserPetsBody>
      <div>
        <UserPetsTitleWrap>
          <UserPetsTitle>My pets:</UserPetsTitle>
          <NavLink to={`add-pet`} state={location.pathname}>
            <UserPetsNavBtn>Add Pet +</UserPetsNavBtn>
          </NavLink>
        </UserPetsTitleWrap>
        {pets.length === 0 ? (
          <NoUserPets>
            You have not added a pet yet, you have the option to add your furry
            friend!
          </NoUserPets>
        ) : (
          <>
            {pets.map(({ _id, petsURL, name, birthday, type, comments }) => (
              <UserPetsInfo key={_id}>
                <UserPetsImg src={petsURL} alt="pet_image" />

                <UserPetsList>
                  <UserPetsItem>
                    Name:{""}
                    <UserPetsItemSpan> {name}</UserPetsItemSpan>
                  </UserPetsItem>
                  <UserPetsItem>
                    Date of birth:{" "}
                    <UserPetsItemSpan> {birthday}</UserPetsItemSpan>
                  </UserPetsItem>
                  <UserPetsItem>
                    Type:{""}
                    <UserPetsItemSpan> {type}</UserPetsItemSpan>
                  </UserPetsItem>
                  <UserPetsItem>
                    Comments:{""}
                    <UserPetsItemSpan>{comments}</UserPetsItemSpan>
                  </UserPetsItem>
                </UserPetsList>
                <UserPetsBtn
                  type="button"
                  onClick={() => {
                    handelDellPets();
                  }}
                >
                  <UserPetsSvg>
                    <use href={sprite + "#icon-delete"} />
                  </UserPetsSvg>
                </UserPetsBtn>
              </UserPetsInfo>
            ))}
          </>
        )}
      </div>
    </UserPetsBody>
  );
};

export default PetsData;
