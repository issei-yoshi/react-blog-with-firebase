import React from 'react'
import "./Home.css"

function Home() {
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