import React from 'react'
import "./Hero.css"
import photo from '../../assets/my_picture2.jpg'
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

function Hero() {
  const [t,i18t] = useTranslation('global');
  return (
    <section id='hero'>
        <div className="hero-background-image"></div>        
        <div className='hero-background-line'></div>
      <div className='hero-text-wrapper'>
        <span className='hero-text-greeting'>{t("hero.greeting")}</span>
        <span>{t("hero.pre-name")}<span className='hero-text-name'>{t("hero.name")}</span></span>
        <div className='hero-text-proffesion'><span>{t("hero.proffesion")}</span>
        <span className='hero-text-proffesion-name'><Typewriter
            options={{
                strings: ['Web developer'],
                autoStart: true,
                loop: true,
            }}/>
        </span>
            </div>
        
      </div>
      <div className='hero-img-wrapper'>
        <img className='hero-img' src={photo} />
      </div>
    </section>
  )
}

export default Hero
