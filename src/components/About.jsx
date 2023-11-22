import React from 'react'
import './About.css'
import { data1, data2 } from './AboutData'

function About() {
   
  return (
    <div>
         {
            data1.map((item)=>(
                <div className='container mt-5'>

                 {  item.id===1?
                  <div className='d-flex justify-content-center imagediv'>

                      <div className='d-flex flex-column  text-start'>
                           <h3 className='mt-4 mb-3 text-secondary'>{item.Heading}</h3>
                           <p className='w-75 lead fs-5'>{item.paragraph}</p>
                           <br />
                           <p className='w-75 lead fs-5'>{item.paragraph1}</p>
                      </div>

                      <div >
                         <img src={item.imageLink} alt="no image"  width={'550px'} />
                    </div>

                    </div>:
                    <div className='container d-flex  imagediv'>

                    <div >
                       <img src={item.imageLink} alt="no image"  width={'550px'} />
                  </div>

                    <div className='d-flex flex-column   text-start mt-3'>
                         <h3 className='mt-4 mb-3 text-secondary'>{item.Heading}</h3>
                         <p className='w-75 lead fs-5'>{item.paragraph}</p>
                         <br />
                         <p className='w-75 lead fs-5'>{item.paragraph1}</p>
                    </div>


                  </div>
                    
                    }
                   

         </div>
            ))
         }
       
       {
          data2.map((item)=>(
              <div className='container'>

                    {item.id % 2 !== 0?
                    <div className='d-flex justify-content-center imagediv'>
     
                           <div className='d-flex flex-column  text-start'>
                                <h3 className='mt-5 mb-3 text-secondary'>{item.Heading}</h3>
                                <p className=' fw-bold  text-warning'>{item.Heading2}</p>
                                <br />
                                <p className='w-75 lead fs-5'>{item.paragraph}</p>

                                <button className='btn btn-outline-warning w-25 fw-bold'>Learn more</button>

                           </div>
     
                           <div >
                              <img src={item.imageLink} alt="no image"  width={'550px'} />
                         </div>
     
                    </div>
                    : 
                    <div className='container d-flex  imagediv'>

                    <div >
                       <img src={item.imageLink} alt="no image"  width={'550px'} />
                  </div>

                  <div className='d-flex flex-column  text-start'>
                                <h3 className='mt-5 mb-3 text-secondary'>{item.Heading}</h3>
                                <p className=' fw-bold  text-warning'>{item.Heading2}</p>
                                <br />
                                <p className='w-75 lead fs-5'>{item.paragraph}</p>

                                <button className='btn btn-outline-warning w-25 fw-bold'>Learn more</button>

                           </div>


                  </div>
                    }

              </div>
          ))
       }

    </div>
  )
}

export default About