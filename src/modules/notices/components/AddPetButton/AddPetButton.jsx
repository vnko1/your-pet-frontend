
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../../../redux/auth/auth-selectors";
import icons from "../../../../assets/icons.svg";
import { AddPetBtn, IconPlus } from "./AddPetButton.styled";
import ModalAttention from "../../../../shared/modals/ModalAttention/ModalAttention";


function AddPetButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();

  return (
    <div>
      <AddPetBtn onClick={isLoggedIn ? () => navigate("/add-pet") : ()=>setIsModalOpen(true)}>
        <span>Add pet</span>
        <IconPlus width="24" height="24">
          <use href={icons + "#plus"} stroke="#FEF9F9" />
        </IconPlus>
      </AddPetBtn>
      {isModalOpen && (
        <ModalAttention toggleModal={() => setIsModalOpen(!isModalOpen)} />
      )}
    </div>
  );
}

export default AddPetButton;
