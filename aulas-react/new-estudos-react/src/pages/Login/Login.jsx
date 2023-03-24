import { Container, Form, Button, FloatingLabel, Toast } from "react-bootstrap"
import "./Login.css"
import { usuarios } from "../../data/usuarios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/loginContext";

export function Login() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const toggleToast = () => setShowToast(!showToast);
    const { setLogado } = useContext(LoginContext);

    const navigator = useNavigate();

    function validar() {
        let email = document.getElementById("loginEmail").value;
        let senha = document.getElementById("loginSenha").value;

        let user = usuarios.find(usuario => usuario.email === email);
        if (!user) {
            toggleToast();
            setToastMessage('Usuário não encontrado!');
        } else if (user.senha === senha) {
            setLogado(true);
            navigator('/');
        } else {
            toggleToast();
            setToastMessage('Senha incorreta! Tente novamente.')
        }


    }

    return (
        <>
            <Container className="card margin-auto mt-4">
                <Form>
                    <FloatingLabel className="mb-3 label" controlId="loginEmail" label="E-mail">
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-3 label" controlId="loginSenha" label="Senha">
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </FloatingLabel>
                    <Form.Check type="checkbox" id="lembrar" label="Lembrar de mim" />
                    <div className="buttons">
                        <Button variant="secondary">Cadastrar-se</Button>
                        <Button onClick={validar} className="ms-2">Entrar</Button>
                    </div>
                </Form>
            </Container>
            <Toast
                className="toast position-absolute"
                show={showToast}
                onClose={toggleToast}
                autohide="true">
                <Toast.Header>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <strong>Erro!</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </>
    )
}