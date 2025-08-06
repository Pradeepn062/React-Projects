import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className='signup'>
    <div className='signup-page'>
        <h2>SignUp Page</h2>

        <div className='email'>
            <label >E:mail</label>
            <input type='email' className='email-input' id='email' required></input> <br/><br/>
        </div>

        <div className='password'>
            <label>Password</label>
            <input type='password' className='password-input' required></input><br/><br/>
        </div>
        <button type='submit'>Login</button>

        <div className='new-account'>
        <a href='#'> <p className='create-account'>create new account</p> </a>
        <a href='#'> <p className='forgot-password'>Forgot Password</p> </a>
        </div>
    
    </div>
    </div>
  )
}

export default SignUp