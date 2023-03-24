import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


export function Equipamentos() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmitEquip(data) {
        let message = `
            Marca: ${data.marca}
            Modelo: ${data.modelo}
            Núm. série: ${data.numSerie}
            Descrição: ${data.descricao}
            Data do Problema: ${data.dataProblema}
            Data de Entrega: ${data.dataEntrega}
            `;
        alert(message);
    }

    return (
        <Form action="submit" onSubmit={handleSubmit(onSubmitEquip)}>
            <h1>Cadastro de Eletrônicos</h1>
            <FloatingLabel
                controlId="marca"
                label="Marca"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Marca"
                    {...register("marca", { required: true, maxLength: 255 })}
                />
            </FloatingLabel>
            {errors.marca && <span style={{ color: "red" }}>
                Digite uma marca válida!
            </span>}
            <FloatingLabel
                controlId="modelo"
                label="Modelo"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Modelo"
                    {...register("modelo", { required: true, maxLength: 255 })}
                />
            </FloatingLabel>
            {errors.modelo && <span style={{ color: "red" }}>
                Digite um modelo válido!
            </span>}
            <FloatingLabel
                controlId="numSerie"
                label="Número de série"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Numero de Serie"
                    {...register("numSerie", { required: true, maxLength: 255 })}
                />
            </FloatingLabel>
            {errors.numSerie && <span style={{ color: "red" }}>
                Digite um num. de série válido!
            </span>}
            <FloatingLabel
                controlId="descricao"
                label="Descrição"
                className="mb-3"
            >
                <Form.Control
                    as="textarea"
                    placeholder="Descrição"
                    style={{ height: "100px" }}
                    {...register("descricao", { required: true, maxLength: 255 })}
                />
            </FloatingLabel>
            {errors.descricao && <span style={{ color: "red" }}>
                Digite uma descrição válida!
            </span>}
            <FloatingLabel
                controlId="data"
                label="Data do problema"
                className="mb-3"
            >
                <Form.Control
                    type="date"
                    placeholder="Data"
                    {...register("dataProblema", { required: true })}
                />
            </FloatingLabel>
            {errors.dataProblema && <span style={{ color: "red" }}>
                Digite uma data válida!
            </span>}
            <FloatingLabel
                controlId="dataEntrega"
                label="Previsão de Entrega"
                className="mb-3"
            >
                <Form.Control
                    type="date"
                    placeholder="Data"
                    {...register("dataEntrega", { required: true })}
                />
            </FloatingLabel>
            {errors.dataEntrega && <span style={{ color: "red" }}>
                Digite uma data válida!
            </span>}
            <Button type="submit">Cadastrar</Button>
        </Form>
    );
}