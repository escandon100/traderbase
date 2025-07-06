import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Default styles
import "./calendar.scss";



const CalendarPage = () => {

  const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };

    return (  
        <>
        <div className="calendarNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" /><p>Main</p></Link><span>/ Calendar webinars</span>

        </div>
        <div className="calendar">
          <div className="main">
            <h1>CALENDAR OF WEBINARS</h1>
            <div className="calendar-container">
            <Calendar onChange={handleChange} value={date} />

          </div>
            
    
    </div>

        </div>

        </>
    );
}

export default CalendarPage;
