import React from 'react';
import './ServicesData.css'
const ServicesData = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="d-flex justify-content-center p-4 mt-5 mb-3">
            <img className="service-image" src={service.img} alt=""/>
            </div>
           
            <div className="d-flex justify-content-center text-secondary mb-3">
            <h5>{service.title}</h5>
            </div>
            <div className="text-secondary mt-4">
                <p>{service.info}</p>
            </div>
        </div>
    );
};

export default ServicesData;