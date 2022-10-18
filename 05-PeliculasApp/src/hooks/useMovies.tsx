import {useEffect, useState} from 'react';
import {MovieAPI} from '../api/movieAPI';
import {getImageColors} from '../helpers/getColors';
import {GradiantContext} from '../context/GradiantContext';
import {MovieResponse, Movies} from '../interfaces/movie';

interface MoviesState {
    playing: Movies[],
    popular: Movies[],
    topRated: Movies[],
    uncoming: Movies[]
}

const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({playing: [], uncoming: [], topRated: [], popular: []});

    const getMovies = async () => {
        const nowPlayingPromise = await MovieAPI.get<MovieResponse>('/now_playing');
        const populatePromise = await MovieAPI.get<MovieResponse>('/popular');
        const upcomingPromise = await MovieAPI.get<MovieResponse>('/upcoming');
        const topRatedPromise = await MovieAPI.get<MovieResponse>('/top_rated');

        const data = await Promise.all([nowPlayingPromise, populatePromise, upcomingPromise, topRatedPromise]);

        setMoviesState({
            playing: data[0].data.results,
            popular: data[1].data.results,
            uncoming: data[2].data.results,
            topRated: data[3].data.results,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};

export {useMovies};
