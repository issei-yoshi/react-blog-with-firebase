import React, { useState } from 'react'
import "./CreatePost.css"
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      },
    });

    navigate("/");
  };

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
        <button className='postButton' onClick={createPost}>Post</button>
      </div>
    </div>
  )
}

export default CreatePost