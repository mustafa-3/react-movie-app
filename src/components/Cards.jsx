import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ movieData }) => {
  const { title, poster_path, vote_average, overview, id } = movieData;
  const navigate = useNavigate()
  return (
    // <div className="col-sm-12 col-md-6 cold-lg-4 cursor-pointer">
    //   <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
    //   <h5>{title}</h5>
    // </div>
    <div className="card col-sm-12 col-md-6 cold-lg-4 cursor-pointer m-4" onClick={() => navigate(`/detail/${id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>
        <a href="#" className="btn btn-primary">
          Detail
        </a>
      </div>
    </div>
  );
};

export default Cards;
