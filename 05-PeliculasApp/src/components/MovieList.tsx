import {FlatList, StyleSheet, Text, View} from "react-native";

import {MoviePoster} from "./MoviePoster";
import {Movies} from "../interfaces/movie";

interface Props {
    title?: string,
    movies: Movies[] | undefined
}

const MovieList = ({title, movies}: Props) => {
    return (
        <View style={{height: (!!title) ? 260 : 280}}>

            <Text style={style.title}>{title}</Text>
            <FlatList
                data={movies}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (<MoviePoster movie={item} width={140} height={200}/>)}>
            </FlatList>

        </View>
    );
};


const style = StyleSheet.create({
    title: {
        color: "#000000C8",
        fontSize: 28,
        padding: 4,
        fontWeight: "bold",
        marginHorizontal: 8
    }
})

export default MovieList;
