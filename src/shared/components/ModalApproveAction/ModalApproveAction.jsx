import { createPortal } from "react-dom";
import { useCallback, useEffect } from "react";

import { ModalOverlay, ModalWrap } from "./ModalApproveAction.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ toggleModal, children }) => {
  const onCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === "Escape") {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", onCloseModal);

    return () => window.removeEventListener("keydown", onCloseModal);
  }, [onCloseModal]);

  return createPortal(
    <ModalOverlay onClick={onCloseModal}>
      <ModalWrap>{children}</ModalWrap>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
