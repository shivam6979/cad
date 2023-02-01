import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Phone.css'
function Phone() {
    const [otp,setOtp] = useState(new Array(4).fill(''));

    const handleChange =(element,index)=>{
        if(isNaN(element.value)) return false// if user not enter a number
        setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)]);
// focus in input
        if(element.nextSibling){
            element.nextSibling.focus()
        }
    }
  return (
    <div className='container'>

    <div className='whole'>
        <span><h2>Phone number</h2>
        <input className='input'  maxLength='10' type='text' placeholder='Enter your phone number'></input>
        <button style={{margin: "16px"}} >Send OTP</button>
        </span>
        <span><h2>OTP</h2>
        {otp.map((data,index)=>{
            return <input className='inputotp' style={{margin: "8px"}} type='text' maxLength='1' key={index} value={data}
            onChange={e=>handleChange(e.target,index)}
            onFocus={e=>e.target.select()}
            ></input>

        })}
        </span>
        <span><h2>Consultation type</h2>
        <button style={{margin: "16px", background:'white'}} ><Link to='/address' style={{ textDecoration: 'none' }}>Online</Link></button>
        <button style={{margin: "16px", background:'white'}}><Link to='/address' style={{ textDecoration: 'none' }}>in-person</Link></button>
        </span>
    </div>
    </div>

  )
}

export default Phone