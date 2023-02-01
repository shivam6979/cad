import React from 'react'
import clImg from '../assets/calender.svg'
import './NavBar.css'

function NavBar() {
  return (
    // <div className='container'>

    <div className='navbar'>
        <img src={clImg} alt='opps'/>
        <h1>Pick your Slot</h1>
        <div className='para'>
        <p>Our team of certified professionals are determined to have your back through your recovery journey  </p>
        </div>
    </div>
    // </div>
  )
}

export default NavBar