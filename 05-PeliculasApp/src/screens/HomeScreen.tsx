import {Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {useMovies} from "../hooks/useMovies";
import {IsLoading} from "../components/IsLoading";
import {MoviePoster} from "../components/MoviePoster";
import MovieList from "../components/MovieList";


const {width: windoWidth} = Dimensions.get("window");

const HomeScreen = () => {
    const {popular, playing, topRated, uncoming, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading) {
        return <IsLoading/>;
    }


    return (
        <ScrollView>
            <View style={{marginTop: top + 20}}>

                {/*Carrusel principal*/}
                <Carousel
                    layout={"default"}
                    data={playing ? playing : []}
                    renderItem={({item}) => (<MoviePoster movie={item}/>)}
                    sliderWidth={windoWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                />

                <View style={{marginTop: 10}}>
                    {/*Peliculas populares*/}
                    <MovieList movies={popular} title={"Populares"}/>
                    <MovieList movies={topRated} title={"Top"}/>
                    <MovieList movies={uncoming} title={"Proximas"}/>
                </View>


            </View>
        </ScrollView>);
};

export {HomeScreen};
