import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Heroi.css"

export function Heroi(){

    const { register, handleSubmit } = useForm();

    function onSubmitHeroi(data){
        console.log(data);
    }

    return(
        <Form className="form" onSubmit={handleSubmit(onSubmitHeroi)}>
            <h2>Cadastro de Herói</h2>
            <FloatingLabel
                controlId="nome"
                label="Nome"
                className="mb-3"
            >
                <Form.Control type="text" {...register("nome")} />
            </FloatingLabel>
            <FloatingLabel
                controlId="poder"
                label="Poder"
                className="mb-3"
            >
                <Form.Control type="text" {...register("poder")} />
            </FloatingLabel>
            <FloatingLabel
                controlId="fraqueza"
                label="Fraqueza"
                className="mb-3"
            >
                <Form.Control type="text" {...register("fraqueza")} />
            </FloatingLabel>
            <FloatingLabel
                controlId="historia"
                label="Historia"
                className="mb-3"
            >
                <Form.Control as="textarea" style={{height: "150px"}} {...register("historia")} />
            </FloatingLabel>
            <Button type="submit">Cadastrar</Button>
        </Form>
    )
}