import useCounter from "../hooks/useCounter";

const ContadorHook = () => {
    const {number, add, subtract} = useCounter(15);

    return (
        <>
            <h3>Contador con Hook</h3> <small>{number}</small>
            <br/>
            <div className={"d-flex justify-content gap-2"}>
                <button className={"btn btn-large btn-primary"} onClick={add}> Sumar</button>
                <button className={"btn btn-large btn-danger"} onClick={subtract}> Restar</button>
            </div>
        </>
    )
        ;
};

export default ContadorHook;