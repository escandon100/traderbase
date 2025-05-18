import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faLineChart } from '@fortawesome/free-solid-svg-icons'


import "./education.scss"

const Education = () => {
  return (
    <div className='education'>
      <div className="educationCenter">
       <h1><FontAwesomeIcon icon={faGraduationCap}  color='#01a976' />Education center </h1>
        <ul>
          <li><Link className='educationLinks'>Webinars</Link></li>
          <li><Link className='educationLinks'>Calender webinars</Link></li>
          <li><Link className='educationLinks'>E-book</Link></li>
        </ul>
      </div>
      <div className="analytics">
        <h1><FontAwesomeIcon icon={faLineChart}  color='#01a976' />Analytics</h1>
        <li><Link className='educationLinks'>Trader advices</Link></li>
      </div>
      <div className="educationAndAnalytics">
        <h1>Education and analytics</h1>
        <div className="educationAndAnalyticsText">
          <p>
          On the page “Education and analytics” you will find valuable data that will support you. 
        We offer you a chance to gain proficiency with every one of the parts of exchanging, including value gauges, hazard and capital administration and exchanging brain science. 
        Analytics is a piece of achievement of any broker. We get ready to market examination and gather data about most recent news once a day.
         Here you will likewise discover advantageous and simple to-utilize monetary timetable.
            
          </p>
        </div>
         
      </div>
      
    </div>
  )
}

export default Education
