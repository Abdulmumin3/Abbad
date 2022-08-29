import React from 'react'
import './login.css'
import pic8 from '../components/Assets/pic8.png'

const Login = () => {
  return (
    <div className='login'>
      <div className='img'>
      <img src={pic8} alt='pic8'/>
      </div>
      <div className='log'>
      <h2>Welcome Back!</h2>
      <input type='email' placeholder='Your Email address' id='email'/>
      <input type='password' placeholder='Your Password' id='pass'/>
      <button className='button'><h3><b>LOGIN</b></h3></button>
      <div className='tin'>
        <section className='sect1'>
      <a href='#' className='are'><h4>Create an account</h4></a>
        </section>
        <section className='sect2'>
      <a href='#' className='are'><h4>Forgot Password</h4></a>
        </section>
      </div>
      </div>
    </div>
  )
}

export default Login