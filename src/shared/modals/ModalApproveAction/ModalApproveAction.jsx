import PropTypes from "prop-types";
import Modal from "../modalPort/modal";
import {
  Button,
  ButtonlWrap,
  CloseButton,
  ModalWrap,
  Text,
  Title,
} from "./ModalApproveAction.styled";

const ModalApproveAction = ({ onSucces, toggleModal }) => (
  <Modal toggleModal={toggleModal}>
    <ModalWrap>
      <Title>Delete adverstiment?</Title>
      <Text>
        Are you sure you want to delete
        <strong> “Cute dog looking for a home”</strong>?
        <br /> You can`t undo this action.
      </Text>
      <ButtonlWrap>
        <Button type="button" onClick={toggleModal}>
          Cancel
        </Button>
        <Button type="button" onClick={onSucces}>
          Yes
        </Button>
      </ButtonlWrap>
      <CloseButton onClick={toggleModal} />
    </ModalWrap>
  </Modal>
);

export default ModalApproveAction;

ModalApproveAction.propTypes = {
  onSucces: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
