

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import Style from './navbar.module.css'


export const Navbar = () => {

  const currentUser = useSelector(state => state.auth)
  const [user, setUser] = useState(currentUser);
  console.log('from navbar', user)
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    // JWT token
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }

    setUser(currentUser)

  }, [location])

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }



  return (
    <div className={Style.navbar}>
      <Link to="/"><h1>QnA</h1></Link>
      {
        user?.token ?
          <div className={Style.navbar__login}>
            <img src={user?.user?.imageUrl} alt={user.user.name[0]} />
            <p>{user?.user?.name}</p>
            <Link to="/" onClick={handleLogout}>Logout</Link>
          </div>
          :
          <div className={Style.navbar__logout}>
            <Link to="/auth">Login</Link>
          </div>
      }

    </div>
  )
}
