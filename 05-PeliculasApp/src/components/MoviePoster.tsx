import {Image, StyleSheet, View} from "react-native";
import {Movies} from "../interfaces/movie";

interface Props {
    movie: Movies;
}

const MoviePoster = ({movie}: Props) => {
    const uriImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <View style={{
            width: 300,
            height: 420,
        }}>

            <View style={style.imageContainer}>
                <Image
                    source={{uri: uriImage}}
                    style={style.image}/>
            </View>

        </View>
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
        elevation: 23,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    },
});

export {MoviePoster};
