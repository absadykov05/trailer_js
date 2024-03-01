import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.main}>
            <div className={s.text1}>SHOW TIME</div>
          {/*  <img className={s.img} src = 'https://www.citypng.com/public/uploads/preview/-11594682069ghcxfigwvh.png'/>*/}
            <div className={s.list1}>
                <NavLink className={s.navlink} to = '/'>HOME</NavLink>
                <NavLink className={s.navlink} to = '/movie'>MOVIE</NavLink>
                <NavLink className={s.navlink} to = '/tvshow'>TV SHOW</NavLink>
                <NavLink className={s.navlink} to='/signin'>PROFILE</NavLink>
            </div>
        </div>
    );
};

export default Header;
