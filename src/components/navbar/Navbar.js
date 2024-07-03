import './Navbar.css';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../state/language/languageSlice';
import { navLinksEn, navLinksRu } from '../../constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [t,i18n] = useTranslation('global');
  const language = useSelector((state) => state.language.value);
  const dispatch =useDispatch();
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

  const changeLanguage = () => {
    if (language === "ru") {
      dispatch(change("en"));
      i18n.changeLanguage("en");
    } else {
      dispatch(change("ru"));
      i18n.changeLanguage("ru");
    }
  }

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
              { (language === "ru" ? navLinksRu : navLinksEn)
              .map((link, key) => {
                  return <li key={key}>
                      <div className='nav-mobile-wrapper'>
                        <a className='nav-menu-item' href={`#${link.id}`}>{link.title}</a>
                      </div>
                  </li>
              })}
            </ul> 
          </div>
          <ul className='nav-menu'>
              {(language === "ru" ? navLinksRu : navLinksEn)
              .map((link, key) => {
                  return <li key={key}>
                      <div className='nav-menu-wrapper'>
                        <a className='nav-menu-item' href={`#${link.id}`}>{link.title}</a>
                      </div>
                  </li>
              })}
          </ul>
          <div className="nav-language" onClick={changeLanguage}>{language}</div>       
        </div>
        
        
    </nav>
    
  )
}

export default Navbar