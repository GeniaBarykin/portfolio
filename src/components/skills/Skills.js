import React from 'react'
import "./Skills.css"
import {skills} from "../../constants"

function Skills() {
  return (
    <section id='skills'>
        <div className='skills-background-line'>
            <div className='skills-background-line1'></div>
            <div className='skills-background-line2'></div>
        </div>
      <div className='skills-container'>
        <h1>Мои навыки</h1>
        <span className='skills-text'>Трудолюбивый и коммуникабельный. Люблю изучать новые технологии. Отлично владею английским языком. Учился в Saxion University of Applied Sciences в Нидерландах
        на разработчика ПО. Командный игрок, с опытом работы в зарубежных компаниях по методике Agile. Люблю и умею решать проблемы. Высокая гибкость и адаптивность.
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
