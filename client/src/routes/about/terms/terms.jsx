import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import First from './mainList/first/first'



import "./terms.scss"

const Terms = () => {
  return (
    <div className="terms">
      <div className="termsNav">
        <FontAwesomeIcon icon={faHome}  color='#01a976'/>
        <Link>Main</Link>
        <h4>Terms and conditions</h4>
      </div>
      <div className="termsBody">
        <div className="left">
          <h1>TERMS & CONDITIONS</h1>
          <p>Note: The English version of this agreement is the governing version and shall prevail whenever there is any discrepancy between the English version and the other versions.</p>
          <p>This client agreement, together with any Schedule(s), and accompanying documents, as amended from time to time, (this “Agreement”) sets out the terms of the contract between you and us. 
          Please read it carefully and let us know as soon as possible if there is anything which you do not understand.</p>
          <div className="mainList">
            <First/>
          </div>

        </div>
        <div className="right">
          
        </div>
        </div>

      </div>
        )
}

export default Terms
