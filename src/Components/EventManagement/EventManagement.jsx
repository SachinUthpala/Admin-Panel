import React from 'react'
import './EventManagement.css'
import { UilPower } from '@iconscout/react-unicons'
import img01 from './imgs/event01.png'
import img02 from './imgs/event02.png'
import img03 from './imgs/event03.png';
import img04 from './imgs/event04.png'

export default function EventManagement() {
  return (
    <div id='eventMAnagement' className='eventManagement'>
        <div className="Heading" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1 >Event Management</h1>
          <UilPower/>
        </div>
        <div className="card-container">
            <div className="card">
                <img src={img01} alt="" />
                <h2>Create Event</h2>
                <p> You Can Create New Event  </p>
            </div>
            <div className="card">
                <img src={img02} alt="" />
                <h2>Current Events</h2>
                <p> You Can See All Event  </p>
            </div>
            <div className="card">
            <img src={img03} alt="" />
                <h2>Update or Delete Event</h2>
                <p>Update Or Delete Current Events</p>
            </div>

            <div className="card">
                <img src={img04} alt="" />
                <h2>Create Reservations</h2>
                <p> You Can Create New Event  </p>
            </div>
            <div className="card">
                <img src={img02} alt="" />
                <h2>Current Reservations</h2>
                <p> You Can See All Event  </p>
            </div>
            <div className="card">
            <img src={img03} alt="" />
                <h2>Update or Delete Reservations</h2>
                <p>Delete Current Events</p>
            </div>

            
        </div>
    </div>
  )
}
