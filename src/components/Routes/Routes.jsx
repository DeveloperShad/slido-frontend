
import React from 'react'
import {Routes as Router,Route} from 'react-router-dom';
import { Auth } from '../Auth/Auth';
import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
export const Routes = () => {
  return (
    <>
        <Navbar/>
        <Router>
            <Route path='/' element={<Home/>}>
        
            </Route>
            <Route path='/auth' element={<Auth/>}>

            </Route>
        </Router>
    </>
  )
}
