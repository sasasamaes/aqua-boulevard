import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../img/logo.png'

const NavbarComponent = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          qua Boulevard
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
