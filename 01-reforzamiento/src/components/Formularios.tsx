import useForm from "../hooks/useForm";

const Formularios = () => {

    const {state, email, password, onChange} = useForm({email: "test@gmail.com", password: "12345678"});

    return (
        <>
            <h3>Formularios</h3>

            <input
                type={"email"}
                placeholder={"Email"}
                className={"form-control"}
                value={email}
                onChange={({target}) => onChange(target.value, "email")}/>

            <input
                type={"password"}
                placeholder={"Password"}
                className={"form-control mt-2 mb-2"}
                value={password}
                onChange={({target}) => onChange(target.value, "password")}/>

            <code>
                <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </code>
        </>
    );
};

export default Formularios;