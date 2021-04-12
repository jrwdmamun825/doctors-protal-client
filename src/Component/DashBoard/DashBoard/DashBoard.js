import React, { useState } from 'react';
import AppoinmentByDate from '../AppointmentByDate/AppoinmentByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appoinments, setAppoinments] = useState([]);
    const handleCalendarChange = date => {
        setSelectedDate(date);
        console.log(date);
        fetch('http://localhost:9901/appoinmentByDate', {
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({date})
        })
            .then(res => res.json())
            .then(appoinment => setAppoinments(appoinment))

    }
    return (
        <div className="row mt-5">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 mt-5">
                <Calendar
                    onChange={handleCalendarChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5">
                <AppoinmentByDate appoinments={appoinments}></AppoinmentByDate>
            </div>

        </div>
    );
};

export default DashBoard;