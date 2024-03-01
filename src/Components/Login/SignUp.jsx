import React, {useState} from 'react'
import s from './Login.module.css';
import Form from './Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {setToken} from '../../Redux/Reducers/usersReducer';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   const dispatch = useDispatch();	
   const navigate = useNavigate();

   const handleRegister = (email, password) => {
	const auth = getAuth();
	 createUserWithEmailAndPassword(auth, email, password)
	  .then(({user}) => {
		console.log(user);
		dispatch(setToken({
			email: user.email,
			id: user.uid,
			token: user.accessToken,
		}));
		navigate('/');
	  })
	  .catch(console.error)
}

  return (
	<div className={s.main}>
                     <Form title = 'Sign in' handleClick = {handleRegister}/>
		     <a href = '/login'>Already have an account?</a>
		</div>
	)
}

export default SignUp