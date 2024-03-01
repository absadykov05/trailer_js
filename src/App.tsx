import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Pages/MoviePage/Movie";
import TvShow from "./Pages/TvShowPage/TvShow";
import Login1 from './Components/Login/Login1.jsx';
import SignUp from "./Components/Login/SignUp";
import {useAppSelector} from './Redux/hooks';

function App() {
    const email = useAppSelector((state) => state.users.email)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tvshow" element={<TvShow />} />
          <Route path='/login' element={<Login1/>} />
          <Route path='/signin' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
