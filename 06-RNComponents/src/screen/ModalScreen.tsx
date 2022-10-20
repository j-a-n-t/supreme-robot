import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useState } from "react";

const ModalScreen = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(!isOpen);
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

          <View style={{
            backgroundColor: "white",
            width: 300,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            shadowOffset: { height: 10, width: 0 },
            elevation: 10,
            borderRadius: 5,
          }}>
            <HeaderTitle title={"Titulo del Modal"} />
            <Text>Cuerpo del modal</Text>
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
