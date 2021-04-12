import React from 'react';

const AppoinmentByDate = ({appoinments}) => {
    return (
        <div>
            <h3>appoinment by date</h3>
            <h3>total {appoinments.length}</h3>
            {
                appoinments.map(appointment => <li key={appointment._id}>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppoinmentByDate;