import styled from "styled-components";
export const DropdownContainer = styled.div`
  margin-bottom: 12px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;
export const TimeBox = styled.div`
  position: relative;
`;
export const TimeList = styled.ul`
  position: absolute;
  top: 0px;
  left: 0;
  width: 120px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border: 1px solid #54adff;
  border-radius: 8px;
  padding: 12px;
`;
