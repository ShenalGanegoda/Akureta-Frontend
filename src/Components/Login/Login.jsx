import React from 'react';
import'./Login.css';
import { MdAlternateEmail, MdLock } from "react-icons/md";
const Login = () => {
  return (
  
    <div className='package'>
       <form action=''>
        <h1>Log in</h1>
        <h4>Log into your account to continue</h4>
        <div className="input">
            <input type='text' placeholder='Email Address' required />
            <MdAlternateEmail className='icon' />

        </div>
        <div className="input">
            <input type='password' placeholder='Password' required />
            <MdLock className='icon' />
        </div>
        <div className="Forgot-recovery">
            <label><input type='checkbox' />Remember me </label>
            <a href = "#">Forgot password?</a>
        </div>
        <button type='Submit'>Log in</button>

        <div className='Google-sign'>
            <p>------OR CONTINUE WITH------</p>
          </div>
        <button type= 'submit'>Sign in with Google</button>  


       </form>
    </div>
  )
}

export default Login
