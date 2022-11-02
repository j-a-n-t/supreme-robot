import { View } from "react-native";

const ItemSeparator = () => {
  return (
    <View style={
      {
        borderBottomWidth: 1,
        borderBottomColor: "#818181",
        opacity: 0.4,
      }}
    />
  );
};

export { ItemSeparator };
