import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => console.log(result)).catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login_container">
				<img src="https://image.flaticon.com/icons/png/512/124/124034.png" />
				<div className="login_text">
					<h1>Sign in to Whatsapp</h1>
				</div>

				<Button onClick={signIn}>Sign In with Google</Button>
			</div>
		</div>
	);
}

export default Login;
