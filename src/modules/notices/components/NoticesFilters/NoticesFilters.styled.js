import styled from "styled-components";

export const FilterBtn = styled.div`
  display: flex;
  /* cursor: pointer; */

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background-color: #c5dff6;
  }

  @media (min-width: 768px) {
    /* стили кнопки без открития*/

    /* width: 152px;
    height: 40px; 
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 40px;
    border: 2px solid #54adff;
    color: #54adff;
    background-color: #ffffff; */
    //=======================================

    /* position: ${(props) => (props.isExpanded ? "absolute" : "static")}; */
    width: 152px;
    gap: 8px;
    background: ${(props) => (props.isExpandedFilter ? "gray" : "#fff")};
    color: #54adff;
    height: ${(props) => (props.isExpandedFilter ? "auto" : "40px")};
    padding: ${(props) => (props.isExpandedFilter ? "8px" : "8px 20px")};
    flex-direction: ${(props) => (props.isExpandedFilter ? "column" : "row")};
    align-items: ${(props) =>
      props.isExpandedFilter ? "flex-start" : "center"};
    justify-content: ${(props) => (props.isExpandedFilter ? "" : "center")};
    border-radius: ${(props) => (props.isExpandedFilter ? "20px" : "40px")};
    border: ${(props) =>
      props.isExpandedFilter ? "none" : "2px solid #54adff"};
  }

  &:hover,
  &:focus {
    border: transparent;
    color: #fef9f9;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  &:hover svg path,
  &:focus svg path {
    stroke: #fef9f9;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
`;

export const FilterItem = styled.li`
  display: flex;
  /* align-items: center; */
  gap: 10px;
  width: 136px;
  /* height: 32px; */
  /* padding: 4px 8px; */
  border-radius: 20px;
  background-color: #cce4fb;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;

  flex-direction: ${(props) => (props.isExpandedAge ? "column" : "row")};
  padding: ${(props) => (props.isExpandedAge ? "14px" : "4px 8px")};
  height: ${(props) => (props.isExpandedAge ? "144px" : "32px")};
  align-items: ${(props) => (props.isExpandedAge ? "" : "center")};
`;
