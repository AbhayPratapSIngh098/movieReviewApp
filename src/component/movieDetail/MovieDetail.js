import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { useEffect } from 'react';
import { fetchAsyncmoviesorshowsDetail } from '../../feature/movies/movieSlice';
import {useSelector} from "react-redux";
import {removeSlecetedMovieOrShow} from '../../feature/movies/movieSlice';

import "./MovieDetail.css"
 
function MovieDetail() {
  const {imdbID}= useParams();
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.movies.selectedmovieorshow)
  console.log(data)
  useEffect(()=>{
    dispatch(fetchAsyncmoviesorshowsDetail(imdbID));
    return ()=>{
      dispatch(removeSlecetedMovieOrShow());
    }
  },[dispatch, imdbID]);

  return (
    <div className='movie-section'>
      {Object.keys(data).length===0?(<div></div>):
     ( <>
      <div className='section-left'>
        <div className='movie-title'>
          {data.Title}
        </div>
        <div className='movie-rating'>
          <span>
            IMDB rating <i className='fa fa-star'></i> : {data.imdbRating}
          </span>
          <span>
            IMDB votes <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}
          </span>
          <span>
            IMDB runtime <i className='fa fa-film'></i> : {data.Runtime}
          </span>
          <span>
            Year <i class="fa fa-calendar" aria-hidden="true"></i> : {data.Year}
          </span>
        </div>
        <div className='movie-plot'>
          {data.Plot}
          <div className='movie-info'>
            <div>
            <span>director</span>
            <span>{data.Director}</span>
            </div>
            <div>
            <span>star</span>
            <span>{data.Actors}</span>
            </div>
            <div>
            <span>Genre</span>
            <span>{data.Genre}</span>
            </div>
            <div>
            <span>Language</span>
            <span>{data.Language}</span>
            </div>
            <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
            </div>
            </div>
          </div>
        </div>
        <div className='section-right'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        </>)
}
      </div>

  
  )
}

export default MovieDetail