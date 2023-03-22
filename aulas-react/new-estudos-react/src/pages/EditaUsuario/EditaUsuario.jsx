import { Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { usuarios } from "../../data/usuarios";

export function EditaUsuario(){

    let params = useParams(); 
    let id = Number.parseInt(params.id);
    let navigate = useNavigate();

    function editar(){
        navigate("/usuarios");
    }

    const user = usuarios.find((usuario) => {
        return usuario.id === id;
    })

    return(
        <div className="edita-usuario">
            <h2>{user.nome}</h2>
            <span>{user.email}</span>
            <br />
            <span>{user.idade}</span>
            <Button onClick={editar} variant='dark'>Editar</Button>
        </div>
    )
}