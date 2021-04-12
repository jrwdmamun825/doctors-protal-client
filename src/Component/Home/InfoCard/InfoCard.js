import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 card-info">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
            <div className="icon">
                <FontAwesomeIcon className="icon-font" icon={info.icon}></FontAwesomeIcon>
                </div>
               <div>
               <h6>{info.title}</h6>
                <small>{info.desciption}</small>
               </div>
            </div>
        </div>
    );
};

export default InfoCard;