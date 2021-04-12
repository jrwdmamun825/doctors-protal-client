import React from 'react';
import BookingAvailable from '../BookingAvailable/BookingAvailable';

const bookingData = [
    {    id: 2233,
        title: 'Teeth orthodontics',
        time: '9:00 am - 12:00 pm',
        available: '10 spaces availavle'

    },
    { 
        title: 'Cosmetic Dentistry',
        time: '10:30 am - 11:30 am',
        available: '10 spaces availavle'

    },
    {   id: 2234,
        title: 'Teeth Cleaning',
        time: '11:00 am - 01:00 pm',
        available: '10 spaces availavle'

    },
    { 
        id: 2235,
        title: 'Cavity Protection',
        time: '05:00 pm - 07:00 pm',
        available: '10 spaces availavle'

    },
    { 
        id: 2236,
        title: 'Teeth orthodontics',
        time: '07:00 am - 09:00 pm',
        available: '10 spaces availavle'

    },
    { 
        id: 2237,
        title: 'Teeth orthodontics',
        time: '08:00 pm - 10:00 pm',
        available: '10 spaces availavle'

    }
]

const BookingAppoinment = ({date}) => {
    return (
        <section>
            <h2 style={{color: '#17A589'}} className="text-center">Availavle Appoinment on {date.toDateString()}</h2>
            <div className="row d-flex jusify-content-center m-auto w-75">
                    {
                        bookingData.map(booking => <BookingAvailable date={date} id={booking.id} booking={booking}></BookingAvailable>)
                    }
            </div>
        </section>

    );
};

export default BookingAppoinment;