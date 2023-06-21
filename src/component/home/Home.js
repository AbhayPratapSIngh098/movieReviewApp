import React, { useEffect } from 'react'
import MovieListing from "../movieListing/MovieListing";

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';

function Home() {

  const dispatch = useDispatch();
 const movieName="Harry"
 const showText="Friends"
  useEffect(()=>{
  dispatch(fetchAsyncMovies(movieName));
  dispatch(fetchAsyncShows(showText));
  },[dispatch])
  return (
    <div>
    <div className='banner-img'></div>
    <MovieListing />
    </div>
  )
}

export default Home