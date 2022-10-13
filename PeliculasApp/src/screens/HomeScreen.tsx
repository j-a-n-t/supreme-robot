import { Button, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { useMovies } from "../hooks/useMovies";
import { IsLoading } from "../components/IsLoading";
import MoviePoster from "../components/MoviePoster";

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { newMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return <IsLoading />;
  }


  return (
    <View style={{ marginTop: top + 20 }}>
      {
        !newMovies
          ? <Text>Sin datos</Text>
          : <>
            {/*<MoviePoster movie={newMovies[0]} />*/}
            <Carousel
              data={newMovies}
              renderItem={() => <MoviePoster movie={newMovies[0]} />} />
          </>

      }

    </View>);
};

export { HomeScreen };
