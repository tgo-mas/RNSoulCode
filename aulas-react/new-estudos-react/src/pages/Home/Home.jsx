import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toast } from "react-bootstrap";
import "./Home.css"
import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext.js"

export function Home() {
    const [showToast, setToast] = useState(true);
    const { logado } = useContext(LoginContext);

    return (
        <div className="wrapper">
            <div className="nav">
                <h1>Home</h1>
                <ul>
                    <li><Link to="/1">Seção 1</Link></li>
                    <li><Link to="/2">Seção 2</Link></li>
                    <li><Link to="/3">Seção 3</Link></li>
                </ul>
            </div>
            <Outlet className="section"></Outlet>
            { logado &&
                <Toast
                    className="toast position-absolute"
                    show={showToast}
                    autohide="true"
                    onClose={() => setToast(false)}>
                    <Toast.Header>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}} width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <strong>Seja bem vindo(a)!</strong>
                    </Toast.Header>
                    <Toast.Body>Logado com Sucesso!</Toast.Body>
                </Toast>}
        </div>
    );
}