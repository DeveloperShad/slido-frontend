

import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import Style from './form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/post'
import {signIn} from '../../actions/auth';

export const Form = ({ currentId, setCurrentId }) => {

  const loggedInUser = useSelector((state) => state.auth)
 

  const initPost = { message: '', tags: ''}
  const [postData, setPostData] = useState(initPost)

  const dispatch = useDispatch();
  const editPost = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

  useEffect(() => {
    if (editPost) {
      setPostData(editPost)
    }
   
  }, [editPost])

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == 'tags') {
      value = value.split(',')
    }
    setPostData({ ...postData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: loggedInUser?.user?.name }))
    }
    else {
      dispatch(createPost({ ...postData, name: loggedInUser?.user?.name }))
    }
    setPostData(initPost)
    setCurrentId(null)
  }


  return (
    <>
      {
        loggedInUser?.user?.name ?
          <div className={Style.form}>
            <h2> {currentId ? 'Updating' : 'Creating'} a post</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="tags" placeholder='Tags put , for multiple tags' value={postData.tags} onChange={handleChange} />
              <textarea name="message" placeholder='Type your question here' cols="10" rows="5" value={postData.message} onChange={handleChange}></textarea>
              <input type="submit" value="Submit"/>
            </form>
          </div>
          :
          <div className={Style.form__info}>
            <p>Please Sign In to post your question and like others questions</p>
          </div>
      }
    </>
  )
}
