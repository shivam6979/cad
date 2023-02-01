import React from 'react'
import { Link } from 'react-router-dom'

function Address2 () {
  return (
    <div className='container'>
<div className='user'>
     <span><h2>Address Line 1</h2>
    <input className='input' type='text' placeholder='Enter Address'></input>
    </span>
    <span><h2>Address Line 2</h2>
    <input className='input' type='text' placeholder='Enter Address'></input>
    </span>
    <span><h2>Pincode</h2>
    <input className='input' type='text' placeholder='Enter City Code'></input>
    </span>
    <button style={{background:'white', color:'black'}}><Link to='/confirm' style={{ textDecoration: 'none' }}>Next</Link></button>

</div>
</div>
    )
}

export default Address2