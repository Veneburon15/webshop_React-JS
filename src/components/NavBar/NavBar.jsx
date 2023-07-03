import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">               
                    <Navbar.Brand href="#home">Éclat</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <NavLink to="/">Inicio</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#Cafe">
                        <NavLink to="/categoria/1">Café</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#Helados">
                        <NavLink to="/categoria/2">Helados</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#Postres">
                        <NavLink to="/categoria/3">Postres</NavLink>
                    </Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;