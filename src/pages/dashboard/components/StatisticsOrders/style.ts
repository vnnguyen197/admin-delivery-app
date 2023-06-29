import { styled } from "styled-components";

// export const StyleCanvas = styled.div`
// width: "600px", height: "300px !important", margin: "auto"
// `

export const StyleCanvas = styled.div`
  width: 37%;
  height: 37%;
  margin: auto;
`;

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;   
`;

export const StyleStatistics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const StyleTotalAccount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  padding: 24px 12px;
  border-radius: 10px;
  width: 33%;
  border: 0.0625rem solid rgb(239, 239, 239);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

export const StyleList = styled.div``;
export const StyleItem = styled.div`
  color: #33303cad;
  font-size: 14px;
  font-weight: 500;
`;

export const StyleTotalItem = styled.div`
  font-size: 1.5rem;
  color: #33303cde;
`;
