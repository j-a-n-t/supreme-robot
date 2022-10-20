import { ScrollView, RefreshControl, View, Text } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useState } from "react";

const PullToRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("terminamos");
      setRefreshing(false);
      setData("Hola mundo");
    }, 3500);
  };

  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        progressViewOffset={10}
        progressBackgroundColor={"blue"}
        colors={["red", "black", "orange"]}
      />
    }>

      <View>
        <HeaderTitle title={"Pull to Refresh"} />
        {
          data && <Text style={{ fontSize: 40, fontWeight: "bold" }}>{data}</Text>
        }
      </View>

    </ScrollView>
  );
};

export { PullToRefreshScreen };
