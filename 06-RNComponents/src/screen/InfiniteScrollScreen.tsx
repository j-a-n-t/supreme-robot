import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useState } from "react";

const InfiniteScrollScreen = () => {

  const [state, setState] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    let newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = state.length + i;
    }

    setTimeout(() => {
      setState([...state, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <Image
        source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
        style={{ width: "100%", height: 400 }}
      />
    );
  };

  return (
    <View>

      <FlatList
        data={state}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title={"Infinite Scroll Screen"} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={(
          <View style={{ height: 100, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={50} color={"red"} />
          </View>
        )}
      />

    </View>
  );
};

export { InfiniteScrollScreen };
