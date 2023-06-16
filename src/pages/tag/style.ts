import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  min-height: 80vh;
`;

export const StyleContentLeft = styled.div`
  width: 10%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 20px;
  background-color: rgb(250, 250, 250);
  padding: 12px;
`;

export const StyleContetnRight = styled.div`
  background-color: rgb(250, 250, 250);
  background-repeat: no-repeat;
  width: 85%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 8px;
  border-radius: 15px;
  overflow-y: auto;
  padding: 24px 24px 0 24px;
`;

export const StyleButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
`;

export const StyleContent = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
`;
export const StyleAddButton = styled.div`
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 13px;
  width: 150px;
  border-radius: 6px;
  border: none;
  padding: 6px;
  margin: 9px 0px;
  transition: all 600ms ease-in-out 0s;
  background: var(--bgr-primary);
`;
export const StyleTitle = styled.h2`
  font-size: 25px;
  color: #33303cde;
  font-weight: bold;
`;
