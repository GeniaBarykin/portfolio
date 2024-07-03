import React from 'react'
import "./Skills.css"
import {skills} from "../../constants"
import { useTranslation } from 'react-i18next';

function Skills() {
  const [t,i18t] = useTranslation('global');
  return (
    <section id='skills'>
        <div className='skills-background-line'>
            <div className='skills-background-line1'></div>
            <div className='skills-background-line2'></div>
        </div>
      <div className='skills-container'>
        <h1>{t("skills.title")}</h1>
        <span className='skills-text'>
            {t("skills.skills-text")}
        </span>
        <div><ul className='skills-list'>
          {skills.map((element, key)=>{
            return <li key={key}>
              <legend title={element.name} ><img className='skills-img' src={element.icon} alt={element.name}></img>
              </legend>
            </li>
          })}</ul>
      </div>
      <div className='spinner'></div>      
      </div>      
    </section>
  )
}

export default Skills
