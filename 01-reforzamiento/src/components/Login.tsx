import {useEffect, useReducer} from "react";

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    name: string
}

type Payload = { username: string, name: string }
type AuthAction =
    | { type: "logout" }
    | { type: "login", payload: Payload }

const Login = () => {

    const initialState: AuthState = {
        validando: true,
        token: null,
        username: "",
        name: "",
    };
    const authReducer = (initialState: AuthState, action: AuthAction): AuthState => {

        switch (action.type) {
            case "logout":
                return {
                    validando: false,
                    token: null,
                    name: "",
                    username: ""
                }
            case "login":
                const {username, name} = action.payload
                return {
                    validando: false,
                    token: "ABC23",
                    name,
                    username
                }
            default:
                return initialState
        }

    }

    const [{validando, token, username}, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: "logout"})
        }, 1500)
    }, []);

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className={"alert alert-info"}> Validando....</div>
            </>
        )
    }

    const login = (): void => dispatch({type: "login", payload: {username: "alexis.torres", name: "alexis torres"}});
    const logout = (): void => dispatch({type: "logout"});

    return (
        <>
            {(token)
                ? <div className={"alert alert-success"}> Autenticado con usuario: {username}</div>
                : <div className={"alert alert-danger"}> No Autenticado</div>
            }

            {(token)
                ? <button className={"btn btn-danger"} onClick={logout}>Salir</button>
                : <button className={"btn btn-primary"} onClick={login}>Iniciar</button>
            }
        </>
    );
};

export default Login;