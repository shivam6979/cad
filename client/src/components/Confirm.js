import React from 'react'
import { Link } from 'react-router-dom'

import confirm from '../assets/confirm.svg'
function Confirm() {
  return (
        <>
            <img src={confirm} alt='opps'style={{width:'16%'}}/>
<br></br>
<br></br>

            <button style={{background:'white', color:'black'}}><Link to='/' style={{ textDecoration: 'none' }}>New appointment</Link></button>

        </>
    )
}

export default Confirm