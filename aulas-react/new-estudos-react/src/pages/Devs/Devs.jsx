import { Form, FloatingLabel, FormCheck } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function Devs() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Form>
            <h1>Cadastro de Programadoes</h1>
            <FloatingLabel
                label="Nome"
                controlId="nome"
                {...register("nome", { required: true, maxLength: 255 })}
            >
                <Form.Control type="text" placeholder="nome" />
            </FloatingLabel>
            <FloatingLabel
                label="E-mail"
                controlId="email"
                {...register("email", { required: true, maxLength: 255 })}
            >
                <Form.Control type="text" placeholder="email" />
            </FloatingLabel>
            <FloatingLabel
                label="Telefone"
                controlId="telefone"
                {...register("telefone", { required: true, maxLength: 255 })}
            >
                <Form.Control type="tel" placeholder="telefone" />
            </FloatingLabel>
            <Form.Group>
                <FloatingLabel
                    label="Estado"
                    controlId="estado"
                    {...register("estado", { required: true, maxLength: 255 })}
                >
                    <Form.Control type="text" placeholder="estado" />
                </FloatingLabel>
                <FloatingLabel
                    label="Cidade"
                    controlId="cidade"
                    {...register("cidade", { required: true, maxLength: 255 })}
                >
                    <Form.Control type="text" placeholder="cidade" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <Form.Label>Interesses</Form.Label>
                <FormCheck/>
            </Form.Group>
        </Form>
    )
}