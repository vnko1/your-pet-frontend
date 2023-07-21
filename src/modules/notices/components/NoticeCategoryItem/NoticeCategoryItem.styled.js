import styled from "styled-components";

export const Card = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 288px;
  height: 456px;
  background-color: gray;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
`;

export const Image = styled.img`
  display: block;
  width: 288px;
  height: 288px;
`;

export const AddToFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Category = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  top: 12px;
  left: 0px;
  width: 126px;
  height: 32px;
  padding: 11px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 16px 16px 0px;
  background: #cce4fb;
`;

export const City = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #cce4fb;
`;

export const Years = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #cce4fb;
`;

export const Gender = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #cce4fb;
`;