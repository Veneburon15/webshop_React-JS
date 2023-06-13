import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SwimOutlet</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Lentes</Nav.Link>
                    <Nav.Link href="#features">Gorras</Nav.Link>
                    <Nav.Link href="#features">Mochilas</Nav.Link>
                    <Nav.Link href="#pricing">Mallas de entrenamiento</Nav.Link>
                    <Nav.Link href="#pricing">Mallas de competición</Nav.Link>
                    <Nav.Link href="#features">Accesorios</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;