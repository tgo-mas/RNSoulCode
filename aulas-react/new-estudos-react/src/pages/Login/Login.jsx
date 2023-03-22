import { Container, Form, Button, FloatingLabel } from "react-bootstrap"
import "./Login.css"

export function Login() {
    return (
        <Container className="card margin-auto mt-4">
            <Form>
                <FloatingLabel className="mb-3 label" controlId="login.email" label="E-mail">
                    <Form.Control type="email" placeholder="Digite seu email" />
                </FloatingLabel>
                <FloatingLabel className="mb-3 label" controlId="login.senha" label="Senha">
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </FloatingLabel>
                <Form.Check type="checkbox" id="lembrar" label="Lembrar de mim"/>
                <div className="buttons">
                    <Button variant="secondary">Cadastrar-se</Button>
                    <Button className="ms-2">Entrar</Button>
                </div>
            </Form>
        </Container>
    )
}