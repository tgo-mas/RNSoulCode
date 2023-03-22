import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { usuarios } from "../../data/usuarios";

export function EditaUsuario(){

    let params = useParams(); 
    let id = Number.parseInt(params.id);

    const user = usuarios.find((usuario) => {
        return usuario.id === id;
    })

    return(
        <div className="edita-usuario">
            <h2>{user.nome}</h2>
            <span>{user.email}</span>
            <br />
            <span>{user.idade}</span>
            <Button variant='dark'>Editar</Button>
        </div>
    )
}