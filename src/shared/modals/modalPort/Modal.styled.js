import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  z-index: 2;
`;
export const ModalWrap = styled.div`
  // max-width: calc(100vw - 40px);
  // max-height: calc(100vh - 24px);
`;
