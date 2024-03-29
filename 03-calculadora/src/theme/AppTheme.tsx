import {StyleSheet} from "react-native";

const className = StyleSheet.create({
    theme: {
        flex: 1,
        backgroundColor: "black",
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30
    },
    resultado: {
        color: "white",
        fontSize: 60,
        textAlign: "right",
        marginBottom:15
    },
    resultadoPequeno: {
        color: "rgba(255,255,255,0.4)",
        fontSize: 30,
        textAlign: "right",
    },
    fila: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10
    },
    botonText: {
        fontSize: 30,
        textAlign: "center",
        padding: 10,
        color: "black",
        fontWeight: "bold"
    }
})

export default className;
