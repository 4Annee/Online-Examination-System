
import React from 'react'

const FormSignIn = () => {
  return (
          <div className="form-content-right">
          <form className='form'>
              <h1>Welcome back </h1><br></br>
              <p>Welcome back ! Please enter your detail </p> <br></br>
              <div className='form-inputs'>
                  <label htmlFor='username ' className='form-label'>Username</label>
                  <input type="text" name='username' className='form-input' placeholder='Enter your username'></input>
              
              </div>
              <div className='form-inputs'>
                  <label htmlFor='password' className='form-label'>Password</label>
                  <input type="password" name='password' className='form-input' placeholder='Enter your password'></input>
                  
              </div>
              <button className='form-input-btn' type='submit'>Sign in</button>
              <span className='form-input-request'>You don't have an account ? <a href="#">request one</a></span>
              
          </form>
      </div>
        )
      }
export default FormSignIn