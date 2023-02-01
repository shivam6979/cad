import React from 'react'
import { Link } from 'react-router-dom'

function PersonalAddress() {
  return (
<div className='container'>
<div className='user'>
     <span><h2>Education</h2>
    <input className='input' type='text' placeholder='Enter education'></input>
    </span>
    <span><h2>Occupation</h2>
    <input className='input' type='text' placeholder='Enter occupation'></input>
    </span>
    <span><h2>City</h2>
    <input className='input' type='text' placeholder='Enter City'></input>
    </span>
    <span><h2>Pincode</h2>
    <input className='input' type='text' placeholder='Enter City Code'></input>
    </span>
    <button style={{background:'white', color:'black'}}><Link to='/address2' style={{ textDecoration: 'none' }}>Next</Link></button>

</div>
</div>
  )
}

export default PersonalAddress