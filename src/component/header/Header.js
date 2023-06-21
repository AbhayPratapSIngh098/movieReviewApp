import React, { useState } from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import user from "../../images/user.png";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';

function Header() {
  const [term, setTerm]=useState("");
  const dispatch = useDispatch();
  const submitHandler=(e)=>{
e.preventDefault();
if(term==="") { return alert("please enter movie name")};
dispatch(fetchAsyncMovies(term));
dispatch(fetchAsyncShows(term));
setTerm("")
  }
  return (
  <div className='header'>
    
    <div className='logo'><Link to="/">Movie App </Link></div>
    <div className='search-bar'>
    <form onSubmit={submitHandler}>
  <input type='text' value={term} placeholder='Search movie or show' onChange={(e)=>setTerm(e.target.value)}></input><button type='submit' ><i className='fa fa-search'></i></button>
   </form> </div>
    <div className='user-image'>
      <img src={user} alt='user' />
    </div>
  
  </div>
  )
}

export default Header