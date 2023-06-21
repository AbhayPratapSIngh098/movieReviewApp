import React from 'react';
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";
import Slider from 'react-slick';
import { settings } from '../../common/setting';


function MovieListing() {
 
  const movies = useSelector((state)=>state.movies.movies);
  const shows = useSelector((state)=>state.movies.shows);
  console.log(shows);
  let renderMovies = "";
 let renderShows="";

  renderMovies= movies.Response ==="True"?(movies.Search.map((value, id)=>{ return (<MovieCard key={id} data={value}/> )})):(<div className="movies-error"><h3>{movies.error}</h3></div>);
  renderShows= shows.Response ==="True"?(shows.Search.map((value, id)=>{ return (<MovieCard key={id} data={value}/> )})):(<div className="movies-error"><h3>{shows.error}</h3></div>);
  
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        
        <div className='movie-container'>
         <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='movie-list'>
        <h2>Shows</h2>
        
        <div className='movies-container'>
        <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing