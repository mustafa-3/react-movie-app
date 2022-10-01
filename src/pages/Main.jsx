import React, { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";

const Main = () => {
  const [movieData, setMovieData] = useState();
  const APİ_KEY = "5c0e880db2a28d7094088d664c7cec1e";
  const [query, setQuery] = useState()
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${APİ_KEY}&query=${query}`;
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(movieData);

  return (
    // <div>
    //   {movieData?.map((item) => {
    //     return (
    //       <div>
    //         <MovieDetail movieData={movieData} />
    //       </div>
    //     );
    //   })}
    // </div>
    <div>asds</div>
    
  );
};

export default Main;
