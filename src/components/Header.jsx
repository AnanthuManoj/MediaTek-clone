import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>50){
            setShow(true);
        }else{
            setShow(false);
        }
    })
})
  return (
    
         <Navbar className={ `${ show &&"nav-bar fixed-top nav-barStyle "} nav-bar fixed-top border-bottom` } bg="trasnparent" data-bs-theme="light">
          <Container className='container d-flex justify-content-around'>
            <div>
              <Navbar.Brand href="#home"><img src="https://www.mediatek.com/dist/mediatek-logo.svg" alt="no image" width={'125px'} /></Navbar.Brand>
           </div>
           <div>
                <Nav className="ms-auto  fs-5 d-flex justify-content-between">
    
                <Nav.Link href="#home" className={`${!show && 'text-white'} `}>Products</Nav.Link>
                <Nav.Link href="#features" className={`${!show && 'text-white'} `}>Technology</Nav.Link>
                <Nav.Link href="#pricing" className={`${!show && 'text-white'} `}>Investors</Nav.Link>
                <Nav.Link href="#pricing" className={`${!show && 'text-white'} `}>About</Nav.Link>
                <Nav.Link href="#pricing" className={`${!show && 'text-white'} `}>Press</Nav.Link>
                <Nav.Link href="#pricing" className={`${!show && 'text-white'} `}>Blog</Nav.Link>
                <Nav.Link href="#pricing"className={`${!show && 'text-white'} `}><i class="fa-solid fa-earth-americas"></i></Nav.Link>
                <Nav.Link href="#pricing" className={`${!show && 'text-white'} `}><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
              </Nav>
           </div>
        </Container>
      </Navbar>
  
  )
}

export default Header