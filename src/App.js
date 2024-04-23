import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {

  const APIKEY="f46eb050"

  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("avengers");

  const getMovieReq = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${APIKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovie(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieReq(searchValue);
  }, [searchValue]);

  return (
    <div className="bg-slate-800 w-full p-10 pt-5 text-center">
      <div className="grid grid-cols-1 w-full">
        <div>
          <MovieListHeading heading="Movie Database" />
        </div>
        <div className="w-full text-center inline-block">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {/* <Button /> */}
        </div>
      </div>
      <div className="pt-10 px-10">
        <MovieList movie={movie} />
      </div>
    </div>
  );
}

export default App;
