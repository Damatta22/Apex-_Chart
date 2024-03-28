import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItens = styled.div`
  font-size: 20px;
  h1 {
    color: #847b7b;
    font-size: 40px;
  }
`;

export const Label = styled.p`
  color: #100c0c;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
`;

export const Img = styled.img`
  position: fixed;
  z-index: -1;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin-left: 30%;
  justify-content: center;
  align-items: center;
`;

export const SignInLink = styled.p`
  color: black;
  font-size: 30px;
`;
