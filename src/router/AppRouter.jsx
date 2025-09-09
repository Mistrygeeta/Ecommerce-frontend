import React from 'react'
import {Routes,Route} from "react-router"
import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/" element= {<HomePage/>}></Route>
    </Routes>
  )
};

export default AppRouter