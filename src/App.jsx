import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'
import { useDispatch } from 'react-redux'
import { axiosInstance } from './config/axiosInstance'
import { addUser } from './features/authSlice'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    (async()=>{
      try {
        let me = await axiosInstance.get("/auth/me");
      console.log(me.data.user);
      if(me){
        dispatch(addUser(me?.data.user))
      }
      } catch (error) {
        console.log("error in /me router")
      }
    })();
  },[])
  return (
    <div>
      <Navbar />
      <AppRouter />  
      </div>
  )
}

export default App