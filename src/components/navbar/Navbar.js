import './Navbar.css';
import { navLinks } from '../../constants'
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobile, setShowMobile] = useState(false)

  const onMobileClick = () => {
    setShowMobile(!showMobile)
  }

  const controlNavbar = () => {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        if (!showMobile) {
          setShow(false);
        } 
      } else { // if scroll up show the navbar
        setShow(true);  
      }      

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <nav className={`nav-container ${show ? 'active' : ' hidden'}`}>
        <div className='nav-content'>
        <div className={`nav-mobile-icon ${showMobile ? 'active' : ''}`} onClick={onMobileClick}></div>
        <div className={`nav-mobile ${showMobile ? 'active' : 'hidden'}`}>
          <ul className='nav-mobile'>
            {navLinks.map((link, key) => {
                return <li key={key}>
                    <div className='nav-mobile-wrapper'>
                      <a className='nav-menu-item' href={`#${link.id}`}>{link.title}</a>
                    </div>
                </li>
            })}
          </ul> 
        </div>
        <ul className='nav-menu'>
            {navLinks.map((link, key) => {
                return <li key={key}>
                    <div className='nav-menu-wrapper'>
                      <a className='nav-menu-item' href={`#${link.id}`}>{link.title}</a>
                    </div>
                </li>
            })}
        </ul>        
        </div>
    </nav>
    
  )
}

export default Navbar