import useUsuarios from "../hooks/useUsuarios";
import {Usuario} from "../interface/reqRes";

const Usuarios = () => {

    const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();
    const renderItem = (usuario: Usuario) => {
        const {id, avatar, first_name, last_name, email} = usuario;
        return (
            <tr key={id.toString()}>
                <td>
                    <img style={{width: "50px", borderRadius: "35px"}} src={avatar} alt={first_name}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className={"table"}>
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map(renderItem)}
                </tbody>
            </table>
            <button className={"btn btn-primary"} onClick={paginaAnterior}>Anterior</button>
            &nbsp;
            <button className={"btn btn-primary"} onClick={paginaSiguiente}>Siguientes</button>
        </>
    );
};

export default Usuarios;