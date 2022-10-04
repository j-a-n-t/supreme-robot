interface Person {
    name: string,
    age: number,
    address: Address
}

interface Address {
    country: string,
    number: number
}

const ObjetosLiterales = () => {

    const person: Person = {
        name: "José Alexis",
        age: 26,
        address: {
            country: "México",
            number: 279
        }
    }


    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    );
};

export default ObjetosLiterales;