import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookingAppoinment from '../BookingAppoinment/BookingAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleCalendarChange = date => {
        setSelectedDate(date);
        console.log(date);
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppoinmentHeader handleCalendarChange={ handleCalendarChange}></AppoinmentHeader>
            <BookingAppoinment date={selectedDate}></BookingAppoinment>
        </div>
    );
};

export default Appoinment;