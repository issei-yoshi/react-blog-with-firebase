import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Logout({ setIsAuth }) {

  const navigate = useNavigate();

  const logout = () => {
    //Googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>Logout</p>
      <button onClick={logout}>Logout with Google</button>
    </div>
  )
}

export default Logout