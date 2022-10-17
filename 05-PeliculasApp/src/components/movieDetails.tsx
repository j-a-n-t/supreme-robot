import {FlatList, ScrollView, Text, View} from "react-native";
import currencyFormatter from "currency-formatter"

import {MovieFull} from "../interfaces/movie";
import {Cast} from "../interfaces/movieCredits";
import Icon from "react-native-vector-icons/Ionicons";
import ActorItem from "./ActorItem";

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <ScrollView>
            <View style={{marginHorizontal: 20}}>
                {/*Detalles*/}
                <View style={{flexDirection: "row"}}>
                    <Icon name={"star-outline"} color={"grey"} size={18}/>
                    <Text style={{marginLeft: 5}}>{movieFull.vote_average} </Text>
                    <Text>- {movieFull.genres.map((g) => g.name).join(" ")} </Text>
                </View>

                {/*Historia*/}
                <View>
                    <Text style={{fontSize: 25, marginTop: 10, fontWeight: "bold"}}>Historia</Text>
                    <Text style={{fontSize: 16}}> {movieFull.overview} </Text>
                </View>

                {/*Presupuesto*/}
                <View>
                    <Text style={{fontSize: 25, marginTop: 10, fontWeight: "bold"}}>
                        Presupuesto
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: "bold"}}>
                        {currencyFormatter.format(movieFull.budget, {code: "USD"})}
                    </Text>
                </View>

                {/*Casting*/}
                <View style={{marginTop: 10, marginBottom: 100}}>
                    <Text style={{fontSize: 25, marginTop: 10, fontWeight: "bold"}}>
                        Actores
                    </Text>
                    <FlatList
                        style={{marginTop: 10, height: 70}}
                        keyExtractor={item => item.id.toString()}
                        data={cast}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => <ActorItem actor={item}/>}>
                    </FlatList>
                </View>
            </View>
        </ScrollView>)
};

export {MovieDetails};
