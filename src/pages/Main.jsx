import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import MovieDetail from "./MovieDetail";

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const API_KEY = "5c0e880db2a28d7094088d664c7cec1e";
  const [query, setQuery] = useState();
  const FEATURED_APİ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const SEARCH_APİ = ` https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${query}`;
  const getData = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovieData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData(FEATURED_APİ);
  }, []);

  console.log(movieData);

  return (
    <>
      <Navbar setQuery={setQuery} getData={getData} query={query} />
      <div className="row text-center g-4 justify-content-center">
        {movieData?.results?.map((item, index) => {
          return <Cards movieData={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Main;
