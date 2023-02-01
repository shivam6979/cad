import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Clender.css'
import Calendar from 'react-calendar';
import {timing} from './timing.js'

// {programData.map((program)=>(
//   <div className='category'>
//       {program.image}
//       <span>{program.heading}</span><span>{program.details}</span>
//   </div>
// ))}
let h=false;
function Clender() {

  const [date,setDate]=useState(new Date());
  const onChange=(date)=>{
    setDate(date)
    h=true
  }
  return (
    <>


    <div className='clender'>
    <div className='clenderleft'>
    <Calendar  onChange={onChange} value={date}/>
    {console.log(date)}
    {/* see it in the bottom */}
    </div>

    <br></br>
    <div className='clenderrigth'>
    {h==true &&     <div>

      <h5>{date.toISOString()}</h5>
      <div className='category1'>
      {timing.map((program)=>(
                <div className='category'>
                    <span>{program.a}</span>
                </div>
            ))}

      </div>
    </div>
    }
    </div>


    </div>

    <br></br>

    <button><Link to='/phone' style={{ textDecoration: 'none' }}>Select date</Link></button>

    </>
  )
}

export default Clender