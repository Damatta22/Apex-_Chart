import { useState } from "react";

import {
  Container,
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
        <ContainerItens>
          <h1>MAKE YOUR LOGIN</h1>
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

          <Button>SignIn</Button>

          <SignInLink>
            Don´t have accounting? <a>SignUp</a>
          </SignInLink>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Login;
