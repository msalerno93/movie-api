import Button from "./Button";

const MovieList = ({ movie }) => {
  return (
    <div className="grid items-center text-center justify-center lg:grid-cols-3 md:grid-cols-2 space-x-1 space-y-5 grid-cols-1">
      {movie.map((movie, i) => {
        return (
          <div key={i} className="text-center w-full items-center">
            <img src={movie.Poster} alt="movie" className="rounded-xl w-3/4" />
            {/* <Button details="Learn More"/> */}
            <div className="text-center w-3/4 text-white justify-center">
            <div className="items-center text-center text-xl pt-2">{movie.Title}</div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
