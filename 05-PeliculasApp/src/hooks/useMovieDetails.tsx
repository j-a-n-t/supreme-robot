import {useEffect, useState} from "react";

import {MovieAPI} from "../api/movieAPI";
import {MovieFull} from "../interfaces/movie";
import {Cast, MovieCast} from "../interfaces/movieCredits";

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[]
}

const UseMovieDetails = (movieId: number) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({isLoading: true, movieFull: undefined, cast: [],});

    const getMovieDetails = async () => {
        const movieDetailsPromise = await MovieAPI.get<MovieFull>(`/${movieId}`);
        const movieCastPromise = await MovieAPI.get<MovieCast>(`/${movieId}/credits`)

        const [details, cast] = await Promise.all([movieDetailsPromise, movieCastPromise]);
        setMovieDetails({
            isLoading: false,
            movieFull: details.data,
            cast: cast.data.cast,
        });
    }

    useEffect(() => {
        getMovieDetails();
    })

    return {...movieDetails}
};

export default UseMovieDetails;
