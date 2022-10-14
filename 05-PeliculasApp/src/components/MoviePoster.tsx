import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Movies} from "../interfaces/movie";
import {NavigationProp, useNavigation} from "@react-navigation/native";

interface Props {
    movie: Movies;
    height?: number,
    width?: number
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const uriImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Detail", movie)}
            activeOpacity={0.8}
            style={{width, height, marginHorizontal: 10}}
        >
            <View style={style.imageContainer}>
                <Image
                    source={{uri: uriImage}}
                    style={style.image}/>
            </View>
        </TouchableOpacity>
    );
};


const style = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    },
});

export {MoviePoster};
