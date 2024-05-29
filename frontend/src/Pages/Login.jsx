import React, { useState } from 'react'
import User from '../components/User';

const Login = () => {
    const [login,setLogin]=useState({});
    const details=["email","password"]
  return (
    <div>
      <User details={details} title={"Login"}/>
    </div>
  )
}

export default Login
