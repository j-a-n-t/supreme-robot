import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";

const ModalScreen = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(!isOpen);
  const { theme, theme: { colors } } = useContext(ThemeContext);
  return (
    <View style={{ ...className.centeredView, marginHorizontal: 10 }}>
      <HeaderTitle title={"Modal Screen"} />

      <Button title={"Abrir modal"} onPress={openModal} />


      <Modal
        visible={isOpen}
        animationType={"fade"}
        transparent={true}
        onRequestClose={openModal}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1, justifyContent: "center", alignItems: "center" }}>

          <HeaderTitle title={"Modal Screen"} />
          <View style={{
            backgroundColor: "black",
            width: 300,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            shadowOffset: { height: 10, width: 0 },
            elevation: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: colors.border,
          }}>
            <HeaderTitle title={"Modal Screen"} />
            <Text style={{ color: colors.text }}>Cuerpo del modal</Text>
            <Button title={"close"} onPress={openModal} />
          </View>

        </View>
      </Modal>

    </View>
  );
};

const className = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export { ModalScreen };
