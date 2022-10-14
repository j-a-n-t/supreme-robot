import {ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {rootStackParams} from "../components/nav/StackNavigation";
import Icon from "react-native-vector-icons/Ionicons";
import useMovieDetails from "../hooks/useMovieDetails";
import {MovieDetails} from "../components/movieDetails";

interface Props extends StackScreenProps <rootStackParams, "Detail"> {
}

const {height: HeightScreen} = Dimensions.get("screen");

const DetailScreen = ({route}: Props) => {
    const movie = route.params;
    const {isLoading, movieFull, cast} = useMovieDetails(movie.id);
    const uriImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <ScrollView>
            <View style={style.containerImage}>
                <Image
                    source={{uri: uriImage}}
                    style={style.posterImage}
                />
            </View>

            <View style={style.marginContainer}>
                <Text style={style.subTitle}>{movie.original_title}</Text>
                <Text style={style.title}>{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color={"#21436c"}/>
                    : <MovieDetails movieFull={movieFull!} cast={cast}/>
            }

        </ScrollView>
    );
};

const style = StyleSheet.create({
    containerImage: {
        overflow: "hidden",
        height: HeightScreen * 0.7,
        width: "100%",
        borderBottomRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 25
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },

})
export {DetailScreen};
