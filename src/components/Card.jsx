import React from 'react'
import { data3 } from './AboutData'

function Card() {
  return (
    <div className='d-flex container justify-content-evenly mb-5'>
     {
        data3.map((item)=>(
            <div className='col-lg-3'>
            <div className='text-start'>
                <img src={item.imageLink} alt="no image" style={{width:'360px'}} className='mb-5' />
                <h5 className='text-warning fw-bold'>{item.Heading}</h5>
                <p className='w-100'>{item.paragraph}</p>
                <h5 className='fw-bold'>{item.Heading1}</h5>
            </div>
          </div>
        ))

       }

    </div>
  )
}

export default Card