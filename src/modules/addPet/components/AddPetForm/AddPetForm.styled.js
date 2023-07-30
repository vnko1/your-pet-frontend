import styled from "styled-components";


export const TitleBox = styled.div`
display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 36px;
`;

export const AddPetFormTitle = styled.h2`
    font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: fit-content;
  margin-left: 12px;
  margin-bottom: 24px;
  color: #111;
`;

export const Steps = styled.div`
      display: flex;
    gap: 12px;
  color: #54ADFF;
  margin-bottom: 70px;
`;

export const StepTitle = styled.h3`
    position: relative;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

    &:after {
    content: '';
    position: absolute;
    background-color: #54ADFF;
    border-radius: 8px;
    width: 100%;
    height: 8px;
    top: 25px;
    left: 0;
    }
`;
