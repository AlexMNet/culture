import { Container, Navbar } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        {/* <Navbar.Brand href='#home'>Culture</Navbar.Brand> */}
        <img
          src='https://assets.website-files.com/5c4c982d25a093717ae235ec/5e5d93b1e4a0998258f2c913_culter.svg'
          width='117'
          data-w-id='955c12c3-5e3c-dbf7-c116-105d0924405e'
          alt=''
          class='wordmark'
        />
      </Container>
    </Navbar>
  );
};
export default MainNavbar;
