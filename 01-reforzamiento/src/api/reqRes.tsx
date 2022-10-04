import axios from "axios";

const reqRes = axios.create({baseURL: "https://reqres.in/api"});

export default reqRes;