import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingAvailable = ({booking,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <div className="col-md-4">
            <div className="p-4 card d-flex justify-content-center mb-5 shadow mt-5 text-center">
                <h5 style={{color: '#17A589', }} className="mt-2">{booking.title}</h5>
                <h6 className="mt-1">{booking.time}</h6>
                <p className="mt-1">{booking.available}</p>
                <button onClick={openModal} style={{backgroundColor: '#17A589', }} className="btn btn-brand text-white w-75 m-auto mt-2">BOOK  APPOINTMENT</button>
            </div>
            <AppoinmentForm booking={booking} dateTime={date} closeModal={closeModal} modalIsOpen={modalIsOpen}></AppoinmentForm>
        </div>
    );
};

export default BookingAvailable;