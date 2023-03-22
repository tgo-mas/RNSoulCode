import { usuarios } from "../../data/usuarios.js"
import { Table } from "react-bootstrap"

export function Usuarios() {
    return (
        <div>
            <h1>Usuários</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => {
                        return (
                            <tr key={index}>
                                <td>1</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.email}</td>
                                <td><a href={`/usuario/edit/${usuario.id}`}>Editar</a></td>
                                <td><a href={`/usuario/perfil/${usuario.id}`}>Ver perfil</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}