import {useState} from "react";

const useCounter = (init: number = 10) => {
    const [number, setNumber] = useState<number>(init);

    const add = (): void => setNumber(number + 1);
    const subtract = (): void => setNumber(number - 1);

    return {
        number,
        add,
        subtract
    }
};

export default useCounter;