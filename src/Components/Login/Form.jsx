import React, {useState} from 'react';
import s from './Login.module.css';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';

const Form = ({title, handleClick}) => {
        const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')
  return (
    <div>
    <div className={s.text}>{title}</div>
			<input 
			value={email} 
			onChange = {(e)=> setEmail(e.target.value)} 
			className={s.input} 
			type = 'email'
			placeholder='email'/>

			<div className={s.text}>Password</div>
			<input value={password}
			 onChange = {(e)=> setPassword(e.target.value)} 
			 className={s.input}
			 type='password'
			 placeholder='password'/>

			 <button onClick = {() => handleClick(email, password)}>
				{title}
			 </button>

			 <NavLink to ='/'>Home</NavLink>
  </div>
  )
}

export default Form