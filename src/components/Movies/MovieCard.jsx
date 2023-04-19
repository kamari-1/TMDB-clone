import Ellipsis from "../../baseUI/Ellipsis";
import RatingCircle from "../../baseUI/Rating-circle";

const getPosterPath = (posterPath) =>
  `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;

const MovieCard = ({
  poster_path,
  name,
  title,
  release_date,
  first_air_date,
  vote_average,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <img
          src={getPosterPath(poster_path)}
          alt={name}
          className="w-[150px] h-[225px] shadow-sm rounded-lg hover:cursor-pointer"
        />
        <div className="absolute top-3 right-[10px] w-[1.4rem] h-[1.4rem] flex">
          <Ellipsis />
        </div>
        <div className="absolute bottom-[-1.2rem] left-2">
          <RatingCircle percent={vote_average * 10} />
        </div>
      </div>
      <div className="flex flex-col pt-5 w-[150px]">
        <h3 className="font-bold hover:cursor-pointer hover:text-tmdbLightBlue">
          {name || title}
        </h3>
        <p className="font-normal text-slate-500">
          {first_air_date || release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
