import { Link } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Menu.css"

export function Menu() {
    return (
        <div className="menu">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>ReactStudies V2.0</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Button variant="link">
                            <Link className="link" to="/">Home</Link>
                        </Button>
                        <Button variant="link">
                            <Link className="link" to="/blog">Blog</Link>
                        </Button>
                        <Button variant="link">
                            <Link className="link" to="/contato">Contato</Link>
                        </Button>
                        <Button variant="link">
                            <Link className="link" to="/usuarios">Usuários</Link>
                        </Button>
                        <Button variant="link">
                            <Link  to="/login">Login</Link>
                        </Button>
                    </Nav>
                </Container>
            </Navbar>


        </div>
    );
}