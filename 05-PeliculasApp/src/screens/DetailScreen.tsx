import {ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {rootStackParams} from "../components/nav/StackNavigation";
import Icon from "react-native-vector-icons/Ionicons";
import useMovieDetails from "../hooks/useMovieDetails";
import {MovieDetails} from "../components/movieDetails";

interface Props extends StackScreenProps <rootStackParams, "Detail"> {
}

const {height: HeightScreen} = Dimensions.get("screen");

const DetailScreen = ({route, navigation}: Props) => {
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
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style={style.backButton}>
                <Icon
                    name={"arrow-back-outline"}
                    size={60}
                    color={"white"}
                />
            </TouchableOpacity>


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
    backButton: {
        position: "absolute",
        zIndex: 999,
        top: 25,
        backgroundColor: "rgba(65,65,65,0.15)",
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    }

})
export {DetailScreen};
