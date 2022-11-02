import {StyleSheet} from 'react-native';

const appStyle = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 5,
    },
    botonGrande: {
        width: 100,
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent:"center",
        marginVertical: 30,
        marginHorizontal: 20,
    },
    menubotton: {
        marginHorizontal: 10,
    },
    menuItem: {
        color: 'black',
        fontSize: 20,
    },
});

const colors = {
    primary: 'black',
    secondary: 'white',
    bodyColor: 'white',
    colorTab: '#284a7e',
};

export {appStyle, colors};
