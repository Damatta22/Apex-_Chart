import { Container, H1, A } from "./header.css";

function Header() {
  return (
    <>
      <Container>
        <H1> Visual Wallet</H1>
        <A>About</A>
        <A>Contact Us</A>
        <A>Became a Member</A>
      </Container>
    </>
  );
}

export default Header;
