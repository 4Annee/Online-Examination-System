import React from 'react'
import './Form.css';
import FormSignIn from './FormSignIn'
import img1 from '../assets/coding-book.png'
const Form = () => {
  return (
    <>
    <div className='form-container'>
    <FormSignIn />
      <div className='form-content-left'>
      <img className='form-img' src={img1} alt='spaceship' />
      </div>
     
    
    </div>
  </>
  )
}

export default Form