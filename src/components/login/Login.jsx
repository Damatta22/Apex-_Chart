import {
  Container,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
} from "./Login.css.jsx";

function Login() {
  return (
    <>
      <Container>
        <ContainerItens>
          <img></img>
          <h1>MAKE YOUR LOGIN</h1>
          <Label>Email</Label>
          <input />

          <Label>Password</Label>
          <Input />

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
