import {Cast} from "../interfaces/movieCredits";
import {Image, StyleSheet, Text, View} from "react-native";

interface Props {
    actor: Cast
}

const ActorItem = ({actor}: Props) => {

    const uriImage = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <>

            <View style={style.container}>
                {
                    actor.profile_path &&
                    <Image
                        style={{width: 50, height: 50, borderRadius: 10}}
                        source={{uri: uriImage}}
                    />
                }
                <View style={style.actorInfo}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>
                        {actor.name}
                    </Text>
                    <Text style={{fontSize: 16, opacity: 0.7}}>
                        {actor.character}
                    </Text>
                </View>
            </View>

        </>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        height:50,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
        marginHorizontal:10,
        paddingRight:15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop:4
    }
})

export default ActorItem;
