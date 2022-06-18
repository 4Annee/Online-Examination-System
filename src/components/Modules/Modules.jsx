import React from 'react'
import './Modules.css'

const Modules = () => {
  return (
    <div className="Modules">
      <h4>Modules</h4>
      <div className="module first">
        <h5>Module 1</h5>
        <p>Base de données avancés 1</p>
        <p>Year 4</p>
      </div>
      <div className="module">
        <h5>Module 2</h5>
        <p>Intergiciel & Microservices</p>
        <p>Year 4</p>
      </div>
      <div className="module">
        <h5>Module 3</h5>
        <p>Base de données avancés 2</p>
        <p>Year 5</p>
      </div>
    </div>
  )
}

export default Modules