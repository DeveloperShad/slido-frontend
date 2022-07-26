

import React, { useEffect, useState } from 'react'
import { Form } from '../Form/Form'
import { Posts } from '../Posts/Posts'
import Style from './home.module.css'

export const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  function handleUpdate(id){
    // alert(id)
    setCurrentId(id)
  }
  useEffect(() => {
   
  }, [])
  
  return (
    <div className={Style.container}>
        <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
        <Posts handleUpdate = {handleUpdate} />
    </div>
  )
}
