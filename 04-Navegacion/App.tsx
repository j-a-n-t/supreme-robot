import {useContext, useReducer} from 'react';
import MenuLateral from './src/nav/MenuLateral';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext, authInitialState} from './src/context/AuthContext';
import {AuthReducer} from './src/reducer/AuthReducer';

// import StackNavigator from "./src/nav/StackNavigator";
// import MenuLateralBasico from "./src/nav/MenuLateralBasico";

const App = () => {
    const AuthContex = useContext(AuthContext);
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const singIn = () => dispatch({type: 'signIn'});
    const logout = () => dispatch({type: 'logout'});
    const changeFavoriteIcon = (iconName: string) => dispatch({type: 'newIcon', payload: iconName});
    const changeName = (name: string) => dispatch({type: 'newPerson', payload: name});

    return (
        <NavigationContainer>
            <AuthContext.Provider value={{authState, singIn, changeFavoriteIcon, logout, changeName}}>
                {/*<StackNavigator/>*/}
                {/*<MenuLateralBasico/>*/}
                <MenuLateral/>
            </AuthContext.Provider>
        </NavigationContainer>

    );
};

export default App;
