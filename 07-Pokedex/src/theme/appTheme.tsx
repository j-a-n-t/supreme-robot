import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokeballBG: {
    width: 300,
    height: 300,
    position: "absolute",
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  cardContainer: {
    marginHorizontal: 20,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
  },
  nameCard: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 20,
    right: 20,
    overflow: "hidden",
  },
  pokeball: {
    width: 120,
    height: 120,
    position: "absolute",
    opacity: 0.5,
  },
  pokeballImage: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});


export default style;
