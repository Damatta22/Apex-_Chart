import { useState } from "react";
import Background from "../../assets/chartBackground.png";

import {
  Container,
  Img,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
} from "./style.jsx";

function Login() {
  const [email, setEmail] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Container>
        <Img src={Background} />
        <ContainerItens>
          <h1>Hello! Make your Login!</h1>

          <Label>Email</Label>

          <Input
            type="email"
            onChange={inputEmail}
            placeholder="Write your E-mail"
          />

          <Label>Password</Label>

          <Input
            type="password"
            onChange={inputPassword}
            placeholder="Write your password"
          />

          <Button>Sign-In</Button>

          <SignInLink>
            Don´t have accounting? <a>Sign-In</a>
          </SignInLink>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Login;
