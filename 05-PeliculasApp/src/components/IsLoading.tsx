import { ActivityIndicator, View } from "react-native";

const IsLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator
        color={"#243788"}
        size={75} />
    </View>
  );
};

export { IsLoading };
