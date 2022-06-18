
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FormSignIn = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.username.value === "student") {
            navigate("/student");
        } else if (e.target.username.value === "teacher") {
            navigate("/teacher");
        }
    }
  return (
          <div className="form-content-right">
          <form className='form' onSubmit={handleClick}>
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
              
          </form>
      </div>
        )
      }
export default FormSignIn