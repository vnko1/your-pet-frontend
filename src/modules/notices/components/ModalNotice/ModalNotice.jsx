import {
  Button,
  ButtonlWrap,
  CloseButton,
  ModalWrap,
  Text,
  Title,
} from "./ModalNotice.styled";

const ModalNotice = ({ onCancel, onSucces, toggleModal }) => {
  return (
    <ModalWrap>
      <Title>Delete adverstiment?</Title>
      <Text>
        Are you sure you want to delete
        <strong> “Cute dog looking for a home”</strong>?
        <br /> You can`t undo this action.
      </Text>
      <ButtonlWrap>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="button" onClick={onSucces}>
          Yes
        </Button>
      </ButtonlWrap>
      <CloseButton onClick={toggleModal} />
    </ModalWrap>
  );
};

export default ModalNotice;
