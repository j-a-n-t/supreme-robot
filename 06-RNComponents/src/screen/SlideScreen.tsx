import { useRef, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Ionicons";

import { HeaderTitle } from "../components/HeaderTitle";
import { itemsSlide, Slide } from "../data/Slide";
import { StackScreenProps } from "@react-navigation/stack";
import { useAnimation } from "../hooks/useAnimation";

interface Props extends StackScreenProps<any, any> {
}

const SlideScreen = ({ navigation }: Props) => {
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const { width, height } = Dimensions.get("window");
  const { opacity, fadeIn } = useAnimation();
  const isVisible = useRef<boolean>(false);

  const renderItem = (item: Slide) => {
    return (
      <View style={className.containerSlider}>
        <Image
          source={item.img}
          style={{
            height: 400,
            width: 350,
            resizeMode: "center",
          }}
        />
        <Text style={className.titleSlide}>{item.title}</Text>
        <Text style={className.titleDesc}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={className.containerPrimary}>
      <HeaderTitle title={"Slide Screen"} />

      <Carousel
        data={itemsSlide}
        keyExtractor={(item: Slide, index: number) => item.title + index}
        renderItem={({ item }: { item: Slide }) => renderItem(item)}
        sliderWidth={width}
        sliderHeight={height}
        itemWidth={width}
        layout={"default"}
        onSnapToItem={(index: number) => {
          setActiveIndex(index);
          if (itemsSlide.length == index + 1) {
            isVisible.current = true,
              fadeIn();
          }
        }}
      />

      <Animated.View style={{ opacity }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25 }}>
          <Pagination
            dotsLength={itemsSlide.length}
            activeDotIndex={ActiveIndex}
            dotStyle={{
              width: 25,
              borderRadius: 10,
              backgroundColor: "#5856D6",
            }} />

          {isVisible.current &&
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("home");
              }}
              style={{
                flexDirection: "row",
                backgroundColor: "#5856D6",
                width: 85,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }} activeOpacity={0.8}>

              <Text style={{ fontSize: 15, color: "white", marginHorizontal: 5 }}>Entrar</Text>
              <Icon name={"arrow-forward"} size={15} color={"white"} />
            </TouchableOpacity>
          }
        </View>
      </Animated.View>

    </SafeAreaView>
  );
};

const className = StyleSheet.create({
  containerPrimary: {
    flex: 1,
    paddingTop: 50,
  },
  containerSlider: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 40,
    justifyContent: "center",
  },
  titleSlide: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#5856D6",
  },
  titleDesc: {
    fontSize: 18,
    opacity: 0.5,
    padding: 10,
    textAlign: "center",
  },
});

export { SlideScreen };
