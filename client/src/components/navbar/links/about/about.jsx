import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faBuilding} from '@fortawesome/free-solid-svg-icons'
import { faGavel} from '@fortawesome/free-solid-svg-icons'


import "./about.scss"

const About = () => {
  return (
    <div className='about'>
      <div className="coinCirclePro">
        <h1><FontAwesomeIcon icon={faBuilding} color='#01a976'/>CoinCircle Pro</h1>
        <ul>
          <li><Link className="aboutLinks">About us</Link></li>
          <li><Link className="aboutLinks">Contact us</Link></li>
          <li><Link className="aboutLinks">Affiliate program</Link></li>
        </ul>

      </div>
      <div className="regulation">
        <h1><FontAwesomeIcon icon={faGavel} color='#01a976'/>Regulation</h1>
        <ul>
          <li><Link className="aboutLinks">Regulation explained</Link></li>
          <li><Link className="aboutLinks">Account Verification Documents</Link></li>
        </ul>

      </div>
      <div className="transparencyPolicy">
        <h1><FontAwesomeIcon icon={faShield} color='#01a976'/>Transparency Policy</h1>
        <ul>
          <li><Link className="aboutLinks">Privacy policy</Link></li>
          <li><Link className="aboutLinks">Safety of Funds</Link></li>
          <li><Link className="aboutLinks">Risk disclosure</Link></li>
          <li><Link className="aboutLinks">Terms and conditions</Link></li>
          <li><Link className="aboutLinks">Information Security</Link></li>
          <li><Link className="aboutLinks">Conflict of interest</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default About
