import {useRef, useState} from "react";

enum Operadores {sumar, restar, multiplicar, dividir}

const useCalculadora = () => {
    const [numeroAnterior, setBeforNum] = useState<string>("0");
    const [res, setRes] = useState<string>("0");
    const ultimaOperacion = useRef<Operadores>();

    const armarOperacion = (numText: string) => {

        if (res.includes(".") && numText === ".") return;

        if (res.startsWith("0") || res.startsWith("-0")) {

            //punto decimal
            if (numText === ".") {
                setRes(res + numText);

                //Evaluar si es otro cero, y tiene punto
            } else if (numText === "0" && res.includes(".")) {
                setRes(res + numText);
                //Evaluar si es dirente de 0 y no tiene punto
            } else if (numText !== "0" && !res.includes(".")) {
                setRes(numText);
                // Evitar el 0.000
            } else if (numText === "0" && !res.includes(".")) {
                setRes(numText);
            } else {
                setRes(res + numText);
            }

        } else {
            setRes(res + numText)
        }
    };
    const cambiarNumeroxAnterior = () => {

        if (res.endsWith(".")) {
            setBeforNum(res.slice(0, -1))
        } else {
            setBeforNum(res);
        }
        setRes("0");
    }

    const clean = () => {
        setRes("0");
        setBeforNum("0");
    };
    const btnDelete = () => {
        let numTemporal = res;
        let signo = "";

        if (numTemporal.includes("-")) {
            signo = "-";
            numTemporal = res.substring(1);
        }

        if (numTemporal.length > 1) {
            setRes(signo + numTemporal.substring(0, numTemporal.length - 1))
        } else {
            setRes("0")
        }
    }
    const positivoNegativo = () => {
        if (res.includes("-")) {
            setRes(res.replace("-", ""))
        } else {
            setRes("-" + res);
        }
    }

    const btnDividir = () => {
        cambiarNumeroxAnterior()
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        cambiarNumeroxAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnRestart = () => {
        cambiarNumeroxAnterior()
        ultimaOperacion.current = Operadores.restar
    }
    const btnSumar = () => {
        cambiarNumeroxAnterior()
        ultimaOperacion.current = Operadores.sumar
    }
    const calcular = () => {
        const num1 = Number(res);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setRes(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setRes(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setRes(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                if (num1 === 0) {
                    setRes("No se puede dividir por 0");
                } else {
                    setRes(`${num2 / num1}`);
                }
                break;
        }
        setBeforNum("0");
    }

    return {
        numeroAnterior,
        numero: res,
        positivoNegativo,
        armarOperacion,
        btnDelete,
        clean,
        btnDividir,
        btnMultiplicar,
        btnRestart,
        btnSumar,
        calcular
    }
};

export default useCalculadora;
