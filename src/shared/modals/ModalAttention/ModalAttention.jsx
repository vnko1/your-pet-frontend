import PropTypes from "prop-types";
import Modal from "../modalPort/Modal";
import spriteSvg from "../../../assets/icons.svg";
import {
  ModalWrap,
    Title,
  Text,
  ButtonWrap,
  CloseButton,
  CloseIcon,
  StyledAuthNavButton,
  StyledLoginIcon,
} from "./ModalAttention.styled";

const ModalAttention = ({ toggleModal }) => {
  return (
    <Modal toggleModal={toggleModal}>
      <ModalWrap>
        <Title>Attention</Title>
        <Text>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Text>
        <ButtonWrap>
          <StyledAuthNavButton $primary to="/login" onClick={toggleModal}>
            Log IN
            <StyledLoginIcon>
              <use href={spriteSvg + "#pawprint"} />
            </StyledLoginIcon>
          </StyledAuthNavButton>
          <StyledAuthNavButton to="/register" onClick={toggleModal}>
            Registration
          </StyledAuthNavButton>
        </ButtonWrap>

        <CloseButton onClick={toggleModal}>
          <CloseIcon>
            <use href={spriteSvg + "#cross"} />
          </CloseIcon>
        </CloseButton>
      </ModalWrap>
    </Modal>
  );
};

ModalAttention.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ModalAttention;
