import { useState } from "react";
import Modal from "../../../../shared/modals/ModalPort/Modal";

import { BtnClose, BtnCongrats, Text, Title } from "./ ModalCongrats.styled";

export const ModalCongrats = () => {
  const [isOpenModalCongrats, setIsOpenModalCongrats] = useState(true);

  const closeModal = () => {
    setIsOpenModalCongrats(false);
  };

  return (
    <>
      {isOpenModalCongrats && (
        <Modal onClick={closeModal}>
          <BtnClose type="button">
            <svg />
          </BtnClose>
          <Title>Congrats!</Title>
          <Text>Youre registration is success</Text>
          <BtnCongrats type="button" onClick={closeModal}>
            Go to profile
            <svg />
          </BtnCongrats>
        </Modal>
      )}
    </>
  );
};
