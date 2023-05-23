import styled from "styled-components";
import background from "assets/images/bgr1.jpg";

export const StyleForm = styled.form`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100vh;
  background: #e0e0e0;
  /* background-color: gray;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const StyleContainer = styled.div`
  padding: 40px 50px;
  margin: 40px auto;
  text-align: center;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 15px;
  box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;
  /* box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px; */
  /* background-color: rgb(255, 255, 255); */
`;

export const StyleInput = styled.div`
  background: #e0e0e0;
`;

export const StyleError = styled.p`
  margin-bottom: 12px;
  display: block;
  color: red;
  font-size: 14px;
  text-align: left;
  white-space: normal;
`;

export const Button = styled.button`
  margin: 25px auto;
  border: none;
  outline: none;
  width: 65%;
  height: 100%;
  text-align: center;
  padding: 10px 0;
  color: #000;
  font-size: 18px;
  letter-spacing: 1px;
  background-color: #004e9a;
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;
  letter-spacing: 0.08em;
  transition: all 500ms ease-in-out;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  &:hover {
    color: #fff;
    background: linear-gradient(145deg, #000, #ffffff);
  }
`;