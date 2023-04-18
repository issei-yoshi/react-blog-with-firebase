import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';

function Login({ setIsAuth }) {

  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  return (
    <div>
      <p>Login</p>
      <button onClick={loginInWithGoogle}>Login with Google</button>
    </div>
  )
}

export default Login