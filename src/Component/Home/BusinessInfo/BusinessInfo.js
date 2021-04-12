import React from 'react';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';
const BusinessInfo = () => {
    const infosData = [
        {
            title : 'Open Hour' ,
           desciption: 'we are open 7days' ,
            background: 'primary',
            icon : faClock
        },
        {
            title : 'Open Hour' ,
           desciption: 'we are open 7days' ,
            background: 'dark',
            icon : faMapMarker
        },
        {
            title : 'Open Hour' ,
           desciption: 'we are open 7days' ,
            background: 'primary',
            icon : faPhone
        }
    ];
    return (
        <section className="row w-75 m-auto text-white">
           <div className="d-flex align-content-center ">
           {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
           </div>
            
        </section>
    );
};

export default BusinessInfo;