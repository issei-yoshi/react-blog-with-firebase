import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {

  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
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