import {useEffect, useRef, useState} from "react";
import {ReqResListado, Usuario} from "../interface/reqRes";
import reqRes from "../api/reqRes";

const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {
        const res = await reqRes.get<ReqResListado>("/users", {params: {page: paginaRef.current}});

        if (res.data.data.length > 0) {
            setUsuarios(res.data.data);
        } else {
            paginaRef.current--;
            alert("sin datos");
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    };

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}

export default useUsuarios;