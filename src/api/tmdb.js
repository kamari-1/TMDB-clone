import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "0b226861a6f30c724a4d5ee6c29bff65",
  },
});
