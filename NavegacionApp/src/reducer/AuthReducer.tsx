import {authState} from '../context/AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'newPerson', payload: string }
    | { type: 'newIcon', payload: string }

const AuthReducer = (state: authState, action: AuthAction): authState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true, username: 'alexis.torres',
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                favoriteIcon: undefined,
                username: undefined,
            };
        case 'newIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'newPerson':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload,
            };
        default:
            return state;
    }
};

export {AuthReducer};
