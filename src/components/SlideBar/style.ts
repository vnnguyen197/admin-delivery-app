import styled from "styled-components";

export const Account = styled.div`
  color: #33303cde;
  background-color: #d9ecf2;
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 600ms ease-in-out;
  margin: 5px 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  &:hover {
    background-color: orange;
    border-top: 0;
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 100%;
`;

export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const ContentBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
