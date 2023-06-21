
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./component/home/Home";
import MovieDetail from "./component/movieDetail/MovieDetail";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div >
      <Router>
        <Header />
        <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/movie/:imdbID" element={<MovieDetail />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
