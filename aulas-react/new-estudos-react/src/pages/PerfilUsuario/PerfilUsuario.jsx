import { useParams } from "react-router-dom"
import { usuarios } from "../../data/usuarios";

export function PerfilUsuario(){

    let id = Number.parseInt(useParams().id);
    let user = usuarios.find((user) => {
        return user.id === id;
    })

    return(
        <div>
            <h1>Perfil do Usuário</h1>
            <span className="nome">
                <h2>{user.nome}</h2>
            </span>
            <span>{user.email}</span>
            <br />
            <span>{user.idade} anos</span>
        </div>
    )
}