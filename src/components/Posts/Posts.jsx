
import React, { useEffect } from 'react'
import Style from './posts.module.css'
import { Post } from './Post/Post'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post'
import { useSelector } from 'react-redux'


export const Posts = ({handleUpdate}) => {
  const posts = useSelector((state) => state.posts)
  // console.log('posts', posts)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
  !posts?.length ? 
  <i className="fas fa-spinner"></i>
  :
   <div className={Style.container}>
      {
        posts.map(el => (
          <Post el={el} key={el._id} handleUpdate = {handleUpdate} />

        ))
      }
    </div>
  )
}
