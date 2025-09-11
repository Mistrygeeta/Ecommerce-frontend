import React, { useState } from 'react'
import Registration from '../components/Registration'
import Login from '../components/Login'

const AuthPage = () => {
  const [flag, setFlag] = useState(false)
  return (
    <div>
      {flag?(
        <Registration setFlag={setFlag}/>
      ):(
      <Login setFlag={setFlag}/>)}
    </div>
  )
}

export default AuthPage