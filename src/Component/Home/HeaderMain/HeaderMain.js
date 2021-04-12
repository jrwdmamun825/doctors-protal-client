import React from 'react';
import mask from '../../../images/mask.png'
import './HeaderMain.css';
const HeaderMain = () => {
    return (
       <main className="row  justify-content-center align-items-center " style={{height: '600px'}}>
           <div className="col-md-4 offset-md-1">
               <h1>Your New Smitle <br/> Start Here</h1>
               <small>We help to protect patients and improve medical education and practice in the Bangladesh by setting standards for students and doctors. We support them in achieving and exceeding those standards, and take action when they are not met.</small>
           </div>
           <div className="col-md-6">
               <img src={mask} alt="" className="img-fluid"/>
           </div>
       </main>
    );
};

export default HeaderMain;