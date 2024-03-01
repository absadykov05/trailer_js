import React, { useState } from "react";
import s from "./Home.module.css";
import Header from "../../Components/Header/Header";
import { redirect } from "react-router-dom";
import { useAppSelector } from '../../Redux/hooks'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const film_data = [
    {
      id: 1,
      title: "LA LA LAND",
      genre: "Romance, Drama",
      date: 2019,
      duration: 128,
      score: 4.5,
      director: "Damien Chazelle",
      stars: "Ryan Gosling, Emma Stone",
      src: "https://wallpapershome.com/images/pages/pic_h/12775.jpg",
    },
    {
      id: 2,
      title: "STAR WARS",
      genre: "Action, Adventure",
      date: 2005,
      duration: 141,
      score: 5,
      director: "Patty Jenkins",
      stars: "Gal Gadot, Chris Pine",
      src: "https://cdn.wallpapersafari.com/38/65/Fcx7LA.jpg",
    },
    {
      id: 3,
      title: "THE LION KING",
      genre: "Action, Adventure",
      date: 2005,
      duration: 141,
      score: 5,
      director: "Patty Jenkins",
      stars: "Gal Gadot, Chris Pine",
      src: "https://u.kanobu.ru/editor/images/93/dee261b9-80e4-4289-990c-22871acf7440.jpg",
    },
  ];
  const film = film_data[currentPage - 1];
  return (
    <div className={s.main} style={{ backgroundImage: `url(${film.src})` }}>
      <Header />
      <div className={s.content}>
        <div className={s.content_1}>
          <div className={s.title}>{film.title}</div>
          <div className={s.list1}>
            <div>{film.genre}</div>
            <div>{film.date}</div>
            <div>{film.duration}</div>
          </div>
        </div>
        <div className={s.content_2}>
          <div>
            {film.director} <span>: Director</span>
          </div>
          <div>
            {film.stars} <span>: Stars</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          position: "fixed",
          bottom: 50,
          gap: 10,
        }}>
        {film_data.map((obj) => {
          return obj.id == currentPage ? (
            <div
              key={obj.id}
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => setCurrentPage(obj.id)}>
              ●
            </div>
          ) : (
            <div
              key={obj.id}
              style={{ cursor: "pointer", color: "grey" }}
              onClick={() => setCurrentPage(obj.id)}>
              ●
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
