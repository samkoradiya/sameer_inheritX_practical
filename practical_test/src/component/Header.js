import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <Navbar expand="lg" className=" header">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/image/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='menu-row'>
          <Nav className=" menu-list">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#ourGallery">Our Gallery</Nav.Link>
            <Nav.Link href="#TeamPlayer">Team & Player</Nav.Link>
            <Nav.Link href="#LeagueTable">League Table</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;