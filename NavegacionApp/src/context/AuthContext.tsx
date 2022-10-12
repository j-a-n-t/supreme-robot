import {createContext} from 'react';

//definir como luce, o que info tiene
export interface authState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}

export interface AuthContextProps {
    authState: authState;
    singIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeName: (name: string) => void;
}

//estado inicial
const authInitialState: authState = {
    isLoggedIn: false,
};

//crear contexto
const AuthContext = createContext({} as AuthContextProps);

export {authInitialState, AuthContext};


