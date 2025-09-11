import React from 'react'
import {Routes,Route} from "react-router"
import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/" element= {<HomePage/>}></Route>
        <Route path='/auth' element= {<AuthPage/>}/>
    </Routes>
  )
};

export default AppRouter