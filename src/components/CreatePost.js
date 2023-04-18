import React, { useState } from 'react'
import "./CreatePost.css"

function CreatePost() {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Post Article</h1>
        <div className='inputPost'>
          <div>Title</div>
          <input
            type="text"
            placeholder='put title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='inputPost'>
          <div>Post</div>
          <textarea
            placeholder='put post content'
            onChange={(e) => setPostText(e.target.value)}
            ></textarea>
        </div>
        <button className='postButton'>Post</button>
      </div>
    </div>
  )
}

export default CreatePost