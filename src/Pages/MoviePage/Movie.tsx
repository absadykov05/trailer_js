import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import s from "./Movie.module.css";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setFilms } from "../../Redux/Reducers/filmReducer";

const Movie = () => {
  const films = useAppSelector((state) => state.film.films);
  const search = useAppSelector((state) => state.film.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4ad836ce85mshf8aa6c4b4a4a731p1df334jsnf6687a397d99",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${search}`, options)
      .then((response) => response.json())
      .then((data) => dispatch(setFilms(data.d)))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={s.main}>
      <Header />
      <div className={s.content}>
        <div>Trending</div>
        <div className={s.films}>
          {films.map((obj) => {
            return (
              <div key={obj.id}>
                <img src={obj.i.imageUrl} />
                <div>{obj.l}</div>
                {/*  <div style={{display: 'flex'}}>
                                <span>{obj.y}</span>
                                <span>4.5</span>
                            </div>*/}
              </div>
            );
          })}
        </div>
        <div>Upcoming</div>
        <div className={s.films}>
          {films.map((obj) => {
            return (
              <div key={obj.id}>
                <img src={obj.i.imageUrl} />
                <div>{obj.l}</div>
              </div>
            );
          })}
        </div>
        {/*  <div>Recommended</div>
                <div className={s.films}>
                    {films.map(obj => {
                        return <div key={obj.id}>
                            <img src={obj.i.imageUrl}/>
                            <div>{obj.l}</div>
                        </div>
                    })}
                </div>*/}
      </div>
    </div>
  );
};

export default Movie;
