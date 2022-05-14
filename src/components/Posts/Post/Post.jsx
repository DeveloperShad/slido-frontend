

import React, { useEffect } from 'react'
import Style from './post.module.css'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post';

export const Post = ({ el, handleUpdate }) => {
  const loggedInUser = useSelector(state => state.auth)
  const dispatch = useDispatch();



  const LikeCount = () => {
    const isUserLiked = el.likes.find((userId) => userId !== loggedInUser?.user?._id || loggedInUser?.user?.googleId);

    return (
      <>
        {
          el.likes.find((like) => like === (loggedInUser?.user?.googleId || loggedInUser?.user?._id))
            ? (
              <span onClick={() => dispatch(likePost(el._id))}><i className="fas fa-thumbs-up"></i> LIKE {el.likes.length}</span>
            ) : (
              <span onClick={() => dispatch(likePost(el._id))}><i className="far fa-thumbs-up"></i> LIKE {el.likes.length || ''}</span>
            )
        }
      </>
    )
  }

  return (
    <div className={Style.post}>
      <div className={Style.post__more}>
        <p>{el.name}</p>
        <p>{el.tags.map(tag => `#${tag} `)}</p>
        <p>{moment(el.createdAt).fromNow()}</p>
      </div>
      <p>{el.message}</p>
      <div className={Style.post__more}>
        <LikeCount />
        {
          (loggedInUser?.user?.googleId === el?.creator || loggedInUser?.user?._id === el?.creator) &&
          (<span onClick={() => dispatch(deletePost(el._id))}><i className="fas fa-trash"></i> DELETE</span>)
        }
        {
          (loggedInUser?.user?.googleId === el?.creator || loggedInUser?.user?._id === el?.creator) &&
          (<span className={Style.post__image_right}>
            <i className="fas fa-edit" onClick={() => handleUpdate(el._id)}></i>
          </span>)
        }
      </div>
    </div>
  )
}
