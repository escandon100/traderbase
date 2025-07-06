import React from 'react';
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';



import "./contact.scss"

const Contact = () => {
    return ( 
        <>
        <div className="contactNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" /><p>Main</p></Link><span>/ Contact Us</span>
        </div>
        <div className="contact">
            <div className="contactMain">
                <h1>WRITE TO US</h1>
                <form action="">
                    <label htmlFor="">Message topic</label>
                    <input type="text" />
                    <label htmlFor="">Name</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="text" />

                    <textarea placeholder="Send a mail to support@traderbasefx.com" name="" id=""></textarea>
                    <button>Send</button>
                </form>

            </div>
            

            <div className="contactDetails">
                <p><FontAwesomeIcon className='icon' icon={faPhone} color='black'/>+1 909 577 2165  - 115 Circle Club Ln</p>
                <p>Georgetown TX 78633</p>

                <p><FontAwesomeIcon className='icon' icon={faEnvelope} color='black' />[support@traderbasefx.com ]</p>
                <p>Working hours of technical support:</p>
                <p><FontAwesomeIcon className='icon' icon={faClock} color="black" /> 08:00 - 20:00 (GMT+3)</p>
            </div>

        </div>
        </>
     );
}

export default Contact;