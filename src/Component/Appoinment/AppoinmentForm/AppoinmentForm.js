import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";




const customStyles = {

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const AppoinmentForm = ({ modalIsOpen, closeModal, booking, dateTime }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = booking.title;
        data.date = dateTime;
        data.created = new Date();

        fetch('http://localhost:9901/appoinment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('appoinment succefully done')
            }
            console.log(data);
        })
        
    };
    // const [modalIsOpen, setIsOpen] = React.useState(false);
    // const openModal = () => {
    //     setIsOpen(true);
    // }
    // const closeModal = () => {
    //     setIsOpen(false);
    // }

    return (
        <div className="card">
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="btn btn-brand float-end" onClick={closeModal}> &#10060;</button>
                <h2 className="text-center mb-4" style={{ color: '#17A589' }}>{booking.title}</h2>
                <p className="text-secondary text-center"><small>ON {dateTime.toDateString()}</small></p>


                <div style={{ width: '500px' }} className="p-2 m-2">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ border: "0" }} style={{ borderStyle: 'none' }}>
                        <select class="form-select mb-1" aria-label="Default select example" >
                            <option selected {...register("time",{ required: true })} >{booking.time}</option>

                        </select>
                        <div className="form-group">
                            <input placeholder="your name"  {...register("name",  { required: true })} className="form-control mb-1" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input placeholder="your email"  {...register("email",{ required: true })} className="form-control form-groum mb-1" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input placeholder="your phone num"  {...register("phone",{ required: true })} className="form-control mb-1" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div className="form-group">

                        </div>
                        <button style={{ backgroundColor: '#17A589' }} className="btn btn-brand mt-2 text-white">submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;