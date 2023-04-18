import React from 'react'
import "./CreatePost.css"

function CreatePost() {
  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Post Article</h1>
        <div className='inputPost'>
          <div>Title</div>
          <input type="text" placeholder='put title' />
        </div>
        <div className='inputPost'>
          <div>Post</div>
          <textarea placeholder='put post content'></textarea>
        </div>
        <button className='postButton'>Post</button>
      </div>
    </div>
  )
}

export default CreatePost