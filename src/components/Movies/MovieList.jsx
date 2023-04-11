import { useEffect, useState } from "react";
import { request } from "../../api/request";
import tmdb from "../../api/tmdb";
import Blur from "../../baseUI/Blur";
import MovieCard from "./MovieCard";

const MovieList = ({ fetch }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //Fetch movies
    const fetchMovies = async () => {
      const { data } = await tmdb.get(request[fetch]);
      setMovies(data.results);
    };

    fetchMovies();
  }, [fetch]);

  return (
    <div className="flex gap-5 overflow-x-auto">
      {movies.map((movie, index) => {
        return <MovieCard key={index} {...movie} />;
      })}
      <div className="absolute top-0 right-0 h-full w-16">
        <Blur />
      </div>
    </div>
  );
};

export default MovieList;
