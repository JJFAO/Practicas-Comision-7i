// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavReactB(props) {
    return (
        <Navbar className="bg-dark navbar-dark" expand="lg">
            <Navbar.Brand href="#home">RC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-style">
                    <Nav.Link to="/" exact as={NavLink} activeClassName="active">
                        Home
                    </Nav.Link>
                    <Nav.Link to="/news/general" as={NavLink} activeClassName="active">
                        Noticias
                    </Nav.Link>
                    {/* <Nav.Link onClick={() => props.setSection('Cards')}>Cards</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('Contador')}>Contador</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('Formulario')}>Formulario</Nav.Link>
                <Nav.Link onClick={() => props.setSection('Fotos')}>Fotos</Nav.Link> */}
                </Nav>
                <Button className="ml-auto" activeClassName="btn btn-danger" as={NavLink} to="login">
                    Login
                </Button>
                <Button className="ml-auto" activeClassName="btn btn-danger" as={NavLink} to="register">
                    Register
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}
