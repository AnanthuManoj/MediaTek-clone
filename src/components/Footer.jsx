import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='bg-dark p-5'>
        <div className='text-white container border-bottom '>

        <ul className='d-flex justify-content-evenly main-ul text-start mb-5'>
           <li>
                    <ul>
                  <p className='fw-bold'>About MediaTek</p>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Office Locations</li>
                    <li>Contact Us</li>
                    </ul>
           </li>

                <li>
                    <ul>
                <p className='fw-bold'>News</p>
                    <li>Press</li>
                    <li>Blog</li>
                    <li>Media Assets</li>
                    <li>Berita / Media - Indonesia</li>
                    <li>Press Room - India</li>
                    <li>Press Room – ประเทศไทย</li>
                    <li>Tin tức - Việt Nam</li>
                    </ul>
                </li>
                <li>
                    <ul>
                <p className='fw-bold'>Investor Relations</p>
                    <li>Financial Information</li>
                    <li>Shareholder Meetings</li>
                    <li>Corporate Governance</li>
                    <li>Investor News</li>
                    <li>Investor Calendar</li>
                    </ul>
                </li>
                <li>
                    <ul>
                <p className='fw-bold'>Discover</p>
                    <li>Powered by MediaTek</li>
                    <li>MediaTek Research</li>
                    <li>MediaTek Foundation</li>
                    <li>MediaTek Ventures</li>
                    <li>Sustainability</li>
                    <li>Report Security Vulnerability</li>
                    </ul>
                </li>
                <li>
                    <ul>
                <p className='fw-bold'>JOIN OUR NEWSLETTER</p>
                    <li> <input type="text" className='form-control mb-3' placeholder='First Name' /> </li>
                    <li><input type="text" className='form-control mb-3' placeholder='First Name' /></li>
                    <li><input type="text" className='form-control mb-3' placeholder='First Name' /></li>
                    <li><button className='btn btn-warning text-white'>Subscribe</button></li>
                    </ul>
                </li>
            </ul>
        </div>
         
      <div className='d-flex justify-content-between container'>
             <div>
                <div className='fs-4 icon-class'>
               <div className='icon-div'> <i class="fa-brands fa-youtube"></i></div>
                <div className='icon-div'><i class="fa-brands fa-twitter"></i></div>
               <div className='icon-div'> <i class="fa-brands fa-facebook"></i></div>
                <div className='icon-div'><i class="fa-brands fa-linkedin"></i></div>
                </div>
             </div>
    
              <div className='text-white d-flex fs-6'>
                <p className='me-3'>Cookie Statement</p>
                <p className='me-3'>Legal Notice</p>
                <p className='me-3'>Privacy Policy</p>
                <p>©2023 MediaTek Inc. All Rights Reserved*</p>
              </div>
      </div>
          
    </div>
  )
}

export default Footer