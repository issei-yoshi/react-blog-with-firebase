import { async } from '@firebase/util'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../firebase'
import "./Home.css"

function Home() {
  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(collection(db, "posts"));
    };
    getPosts();
  }, []);

  return (
    <div className='homePage'>
      <div className='postContents'>
        <div className='postHeader'>
          <h1>Title</h1>
        </div>
        <div className='postTextContainer'>
          Learning React now dayo
        </div>
        <div className='nameAndDeleteButton'>
          <h3>@Issei</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Home