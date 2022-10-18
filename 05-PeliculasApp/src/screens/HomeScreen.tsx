import {useContext, useEffect} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useMovies} from '../hooks/useMovies';
import MovieList from '../components/MovieList';
import {IsLoading} from '../components/IsLoading';
import {getImageColors} from '../helpers/getColors';
import {MoviePoster} from '../components/MoviePoster';
import {GradiantBackground} from '../components/GradiantBackground';
import {GradiantContext} from '../context/GradiantContext';

const {width: windoWidth} = Dimensions.get('window');

const HomeScreen = () => {
    const {setMainColors} = useContext(GradiantContext);
    const {popular, playing, topRated, uncoming, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    const getPosterColors = async (index: number) => {
        const movie = playing[index];
        const uriImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColors(uriImage);
        setMainColors({primary, secondary});
    };
    useEffect(() => {
        if (playing.length > 0) {
            getPosterColors(0);
        }
    }, [playing]);

    if (isLoading) {
        return <IsLoading/>;
    }

    return (
        <GradiantBackground>
            <ScrollView>
                <View style={{marginTop: top + 20}}>

                    {/*Carrusel principal*/}
                    <Carousel
                        layout={'default'}
                        data={playing ? playing : []}
                        renderItem={({item}) => (<MoviePoster movie={item}/>)}
                        sliderWidth={windoWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={index => getPosterColors(index)}
                    />

                    <View style={{marginTop: 10}}>
                        {/*Peliculas populares*/}
                        <MovieList movies={popular} title={'Populares'}/>
                        <MovieList movies={topRated} title={'Top'}/>
                        <MovieList movies={uncoming} title={'Proximas'}/>
                    </View>


                </View>
            </ScrollView>
        </GradiantBackground>);
};

export {HomeScreen};
