import axios from "axios";


const MovieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  method: "GET",
  params: {
    api_key: "9ea8c8952cae2f4c98a22b0331d3706e",
    language: "es-ES",
  },
});

export { MovieAPI };
