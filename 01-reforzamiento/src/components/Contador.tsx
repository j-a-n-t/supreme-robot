import {useState} from "react";

const Contador = () => {

    const [number, setNumber] = useState<number>(0);

    const add = (): void => setNumber(number + 1);
    const subtract = (): void => setNumber(number - 1);

    return (
        <>
            <h3>Contador</h3> <small>{number}</small>
            <br/>
            <div className={"d-flex justify-content gap-2"}>
                <button className={"btn btn-large btn-primary"} onClick={add}> Sumar</button>
                <button className={"btn btn-large btn-danger"} onClick={subtract}> Restar</button>
            </div>
        </>
    )
        ;
};

export default Contador;