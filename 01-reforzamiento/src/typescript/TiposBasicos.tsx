const TiposBasicos = () => {

    const name: string = "José Alexis";
    const age: number = 26;
    const isActive: boolean = true;
    const isArray: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

    return (
        <>
            <h3>Tipos básicos</h3>
            Nombre: {name}
            <br/>
            Edad: {age}
            <br/>
            Estatus: {isActive ? "activo" : "inactivo"}
            <br/>
            Poderes: {isArray.join(", ")}
        </>
    );
};

export default TiposBasicos;