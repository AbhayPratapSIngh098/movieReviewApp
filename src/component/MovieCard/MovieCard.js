import React from 'react';
import "./MovieCard.css";
import { Link } from "react-router-dom"

function MovieCard({ data }) {
  return (
    <div className='card-item'>
      <Link to={`/movie/${data.imdbID}`}>
        <div className='card-inner'>
          <div className='card-top'>
            <img src={data.Poster} alt={data.Title}></img>
          </div>
          <div className='class-bottom'>
            <div className='card-info'>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard