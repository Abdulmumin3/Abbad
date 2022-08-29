import React from 'react'
import './signup.css'
import pic9 from '../components/Assets/pic9.png'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='new'>
      <img src={pic9} alt='pic9'/>
      </div>
      <div className='sig'>
      <h2>Welcome to Lillies!</h2>
      <input type='text' placeholder='Your First Name' id='fist'/>
      <input type='email' placeholder='Your Email address' id='emal'/>
      <input type='password' placeholder='Your Password' id='pas'/>
      <button className='btn'><h3><b>LOGIN</b></h3></button>
      <div className='up'>
        <section className='sect'>
      <a href='#' className='are'><h4>Create an account</h4></a>
        </section>
        <section>
      <a href='#' className='are'><h4>Forgot Password</h4></a>
        </section>
      </div>
      </div>
    </div>
  )
}

export default Signup