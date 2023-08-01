import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deletePet } from "../../../../redux/pets/pets-operation";

import {
  UserPetsBtn,
  UserPetsImg,
  UserPetsInfo,
  UserPetsItem,
  UserPetsItemSpan,
  UserPetsList,
  UserPetsSvg,
} from "./PetsItem.styled";
import sprite from "../../../../assets/icons.svg";

const PetsItem = ({ _id, image, name, birth, type, comments }) => {
  const dispatch = useDispatch();

  const handelDellPets = (_id) => {
    dispatch(deletePet(_id));
  };
  return (
    <UserPetsInfo>
      <UserPetsImg src={image} alt="pet_image" />

      <UserPetsList>
        <UserPetsItem>
          Name:{""}
          <UserPetsItemSpan> {name}</UserPetsItemSpan>
        </UserPetsItem>
        <UserPetsItem>
          Date of birth: <UserPetsItemSpan> {birth}</UserPetsItemSpan>
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
        onClick={() => {
          handelDellPets(_id);
        }}
      >
        <UserPetsSvg>
          <use href={sprite + "#icon-delete"} />
        </UserPetsSvg>
      </UserPetsBtn>
    </UserPetsInfo>
  );
};

PetsItem.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
};

export default PetsItem;
