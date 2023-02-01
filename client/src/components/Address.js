import React from 'react'
import { Link } from 'react-router-dom'
import './Address.css'
let hello = "in-person";
let gone = 'banglore'
function Address() {

  const location=[
    {
      a:'Koramangala',
    },
    {
      a:'jaynagar',
    },
    {
      a:'Indiranagar',
    },
    {
      a:'Jp nagar',
    },
    {
      a:'Banashankari',
    }
  ]
  const isBackgroundRed = true;

{/* <div className={isBackgroundRed ? 'background-red' : 'background-blue'} /> */}

  return (
    <div>
        <div className='address'>
            <h2>Consultation</h2>
            <button >{hello}</button>
            <h2>Location</h2>
            <button>{gone}</button>
            <h2>Center</h2>

            <div className='location1'>
                    {location.map((program)=>(
                      <div className='category9'>
                        <div className='lefta'>
                            <span><button style={{backgroundColor: isBackgroundRed ? 'rgb(13, 86, 232)' : 'white', color:'black', border:'white'}}>{program.a}</button></span>
                        </div>
                        <div className='righta'>
                        {/* <span><button style={{backgroundColor: isBackgroundRed ? 'rgb(13, 86, 232)' : 'white', color:'black'}}>{program.b}</button></span> */}

                            </div>
                        </div>
                    ))}
                </div>
            {/* <span>
            <button style={{backgroundColor: isBackgroundRed ? 'rgb(13, 86, 232)' : 'white', color:'black'}}>Electronic City</button>
            <button style={{background:'white', color:'black'}}>Koramangala</button>
            <button style={{background:'white', color:'black'}}>jaynagar</button>
            </span><br></br>
            <span>
            <button style={{background:'white', color:'black'}}>Indiranagar</button>
            <button style={{background:'white', color:'black'}}>Jp nagar</button>
            <button style={{background:'white', color:'black'}}>Banashankari</button>
            </span><br></br> */}

        </div>
        <button style={{background:'white', color:'black'}}><Link to='/userdetails' style={{ textDecoration: 'none' }}>Next</Link></button>

    </div>
  )
}

export default Address