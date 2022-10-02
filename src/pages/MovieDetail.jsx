import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const API_KEY = "5c0e880db2a28d7094088d664c7cec1e";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieInfo(data));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(movieInfo);
  const { release_date, vote_average, vote_count, poster_path, overview } =
    movieInfo;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          //{" "}
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            // <h5 className="card-title">Overview</h5>
            <p className="card-text">{overview}</p>
            <p className="card-text">Release Date: {release_date}</p>
            <p className="card-text">Rate: {vote_average}</p>
            <p className="card-text">Total Vote: {vote_count}</p>
            <button type="button" class="btn btn-info">
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
