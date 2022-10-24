import { ScrollView, RefreshControl, View, Text } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";

const PullToRefreshScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("terminamos");
      setRefreshing(false);
      setData("Refresh ok");
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
          data && <Text style={{ fontSize: 40, fontWeight: "bold",color:colors.text }}>{data}</Text>
        }
      </View>

    </ScrollView>
  );
};

export { PullToRefreshScreen };
