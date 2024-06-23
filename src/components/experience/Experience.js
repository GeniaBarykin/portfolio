import React, {useLayoutEffect} from 'react'
import {experiences} from '../../constants'
import './Experience.css'



const ExperienceCard = ({experience}) => (
  <div className='experience-body'>
    <div className='experience-arrow'></div>
    <div className='experience-card'>

      <div>
        <h3 className='experience-title'>
          {experience.title}
        </h3>
        <h5>{experience.date}</h5>
        <p className='experience-company'
          style={{margin: 0}}>
            {experience.company_name}
        </p>
      </div>
        <ul>
          {experience.points.map((point, key) =>(
            <li key={`experience-point-${key}`}>
                {point}
            </li>
          ))}
        </ul>
        
    </div>
  </div>
)

const Experience = () => {
  
  const intersectionCallback = (entries) => {
    for (const entry of entries) { 
      if (entry.isIntersecting) { // This is true when the element is in view.
        entry.target.classList.add('show'); 
      } 
    }
  }
  const observer = new IntersectionObserver(intersectionCallback);
  function checkIfVisible(){
    const items = document.querySelectorAll('.experience-body');
    for (const item of items) {
      observer.observe(item);
    }
  }  
  useLayoutEffect(() => {

    window.addEventListener('scroll', checkIfVisible)
  
    return () => window.removeEventListener('scroll', checkIfVisible)
  
  }, [])
  return (
    <section id="experience">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffe4c4" d="M0,32L48,64C96,96,192,160,288,170.7C384,181,480,139,576,117.3C672,96,768,96,864,122.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <div className='experience-bubble bubble-1'></div>
    <div className='experience-bubble bubble-2'></div>
    <div className='experience-bubble bubble-3'></div>
    <div className='experience-container'>    
      <div className='experience-timeline' >        
          {experiences.map((experience, key) => (
                <ExperienceCard
                key={key} experience= {experience} />
              ))}
        </div>  
      </div>
      <svg className='experience-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe4c4" d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,80C672,107,768,149,864,149.3C960,149,1056,107,1152,122.7C1248,139,1344,213,1392,250.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </section>
  )
}

export default Experience

