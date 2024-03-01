import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  Form  from './Form';
import s from './Login.module.css';
import { useDispatch } from 'react-redux';
import { setToken } from '../../Redux/Reducers/usersReducer';
import { useNavigate } from 'react-router-dom';

 const Login1 = () => {
        const dispatch = useDispatch();	
        const navigate = useNavigate();
	const auth = getAuth();

	const handleLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)	
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
		<Form
		 title = 'Log in' 
		 handleClick = {handleLogin}
		 />
		<a href = '/signin'>Do not have an account?</a>
	</div>
	)
}

export default Login1;