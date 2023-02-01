import React from 'react'
import { Link } from 'react-router-dom'

function UserDetails() {
  return (
    <div className='container'>
    <div className='user'>
         <span><h2>Name</h2>
        <input className='input' type='text' placeholder='Enter your phone number'></input>
        </span>
        <span><h2>Email</h2>
        <input className='input' type='text' placeholder='Enter your phone number'></input>
        </span>
        <span><h2>Gender</h2>
        <input className='input' type='text' placeholder='Enter your phone number'></input>
        </span>
        <span><h2>Age</h2>
        <input className='input' type='text' placeholder='Enter your phone number'></input>
        </span>
        <button style={{background:'white', color:'black'}}><Link to='/personaladdress' style={{ textDecoration: 'none' }}>Next</Link></button>

    </div>
    </div>
  )
}

export default UserDetails


