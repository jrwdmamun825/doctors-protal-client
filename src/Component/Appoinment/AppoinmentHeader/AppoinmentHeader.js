import React, { useState } from 'react';
import mask from '../../../images/mask.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppoinmentHeader = ({handleCalendarChange}) => {
    
    
    return (
        <main className="row d-flex justify-content-center mb-5">
            <div className="col-md-4 offset-md-1">
            <h3 className="p-4">Appoinment</h3>
                <Calendar
                    onChange={handleCalendarChange}
                    value={new Date()}
                />

            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={mask} alt="" />
            </div>
        </main>
    );
};

export default AppoinmentHeader;