
import React, { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import Style from './auth.module.css'

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  // const dispacth = useDispatch();
  // const navigate = useNavigate();

  // const googleSuccess = async (response) => {
  //   // console.log(response)
  //   const user = response?.profileObj;
  //   const token = response?.tokenId;
  //   try {
  //     dispacth({ type: 'AUTH', data: { user, token } })
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const googleFailure = async (error) => {
  //   console.log('Error Message',error)
  // }

  return (
    <div className={Style.auth}>
      {
        isSignIn ? 
        <SignIn setIsSignIn={setIsSignIn} isSignIn={isSignIn}/>
        : 
        <SignUp setIsSignIn={setIsSignIn} isSignIn={isSignIn}/>
      }
     
     
    </div>
  )
}



