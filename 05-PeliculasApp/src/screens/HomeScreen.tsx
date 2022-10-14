import {Dimensions, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {useSafeAreaInsets} from "react-native-safe-area-context";
// import { NavigationProp, useNavigation } from "@react-navigation/native";

import {useMovies} from "../hooks/useMovies";
import {IsLoading} from "../components/IsLoading";
import {MoviePoster} from "../components/MoviePoster";


const {width: windoWidth} = Dimensions.get("window");

const HomeScreen = () => {
    // const navigation = useNavigation<NavigationProp<any>>();
    const {newMovies, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading) {
        return <IsLoading/>;
    }


    return (
        <View style={{marginTop: top + 20}}>

            <Carousel
                layout={"default"}
                data={newMovies ? newMovies : []}
                renderItem={({item}) => <MoviePoster movie={item}/>}
                sliderWidth={windoWidth}
                itemWidth={300}
            />


        </View>);
};

export {HomeScreen};
