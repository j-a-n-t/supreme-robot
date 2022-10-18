import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/components/nav/StackNavigation';
import {GradiantProvider} from './src/context/GradiantContext';
// import FadeScreen from './src/screens/FadeScreen';

const AppState = ({children}: any) => {
    return (
        <GradiantProvider>
            {children}
        </GradiantProvider>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <StackNavigation/>
            </AppState>
        </NavigationContainer>
    );
};

export default App;
