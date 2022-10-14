import { useEffect, useState } from "react";
import { MovieAPI } from "../api/movieAPI";
import { MovieData, Movies } from "../interfaces/movie";

const useMovies = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newMovies, setNewMovies] = useState<Movies[]>();

  const getMovies = async () => {
    const { data: { results } } = await MovieAPI.get<MovieData>("/now_playing");
    setNewMovies(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    newMovies,
    isLoading,
  };
};

export { useMovies };
