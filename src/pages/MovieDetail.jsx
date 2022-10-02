import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({movieData}) => {
  const {id} = useParams()
  const [movieInfo, setMovieInfo] = useState()
  const API_KEY = "5c0e880db2a28d7094088d664c7cec1e";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  const getData = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setMovieInfo(data))
  }
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail