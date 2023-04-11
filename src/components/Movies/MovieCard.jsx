const getPosterPath = (posterPath) =>
  `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;

const MovieCard = ({
  poster_path,
  name,
  title,
  release_date,
  first_air_date,
}) => {
  return (
    <div className="flex flex-col">
      <img
        src={getPosterPath(poster_path)}
        alt={name}
        className="w-[150px] h-[225px] rounded-lg mb-6"
      />
      <div className="flex flex-col w-[150px]">
        <h3 className="font-bold">{name || title}</h3>
        <p className="font-normal text-slate-500">
          {first_air_date || release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
