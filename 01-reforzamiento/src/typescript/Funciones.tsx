const Funciones = () => {

    const sumar = (a: number, b: number): number => (a + b);

    return (
        <>
            <h3>Funciones</h3>
            Resultado es: {sumar(145, 132)}
        </>
    );
};

export default Funciones;