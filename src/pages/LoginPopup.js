import React, { useState, useContext } from "react";
import {useParams } from "react-router-dom";
import { ContextPatient } from '../context/PatientContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPopup({show,setShow}) {
  console.log("show12",show)
    const { id,frist_name,last_name } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_no, setPhone_no] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [gender, setGender] = useState('');
    const [medical_condition, setMedical_Condition] = useState('');
    const [age, setAge] = useState('');

    const [patient, setPatient ] = useContext(ContextPatient);
  console.log("patient",patient._id);
    
    async function popupLogin(e) {
        e.preventDefault();
        let item = { name: name, email: email, phone_no: phone_no, date: date, time: time, gender: gender, medical_condition: medical_condition, doctorid: id,doctor_fname:frist_name,doctor_lname:last_name, patientid: patient._id, age: age };
        let result = await fetch("https://callmydoc.herokuapp.com/api/patient-appointment", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(item)           
        });
        
        let result2 = await result.json();
             if (result2.msg === "Appointment Booked successfully") {              
              toast.info('Appointment Booked successfully', {
                position: toast.POSITION.TOP_RIGHT
            });                      
        }  
        setShow(false)
      } 

    return (
        <div >
               <Modal show={show} onHide={setShow} id="myModal">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
        <div className="md-form mb-4">
          <input type="text" val={name} onChange={(e) => {setName(e.target.value)}} id="orangeForm-name" className="form-control validate" placeholder="Your Name" />
        </div>
        <div className="md-form mb-4">
          <input type="email" val={email} onChange={(e) => {setEmail(e.target.value)}} id="orangeForm-email" className="form-control validate" placeholder="Your Email" />
        </div>

        <div className="md-form mb-4">
          <input type="tel" val={phone_no} onChange={(e) => {setPhone_no(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Your Phone no."/>
        </div>

        <div className="md-form mb-4">
          <input type="date" val={date} onChange={(e) => {setDate(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Appointment Date" />
        </div>

        <div className="md-form mb-4">
          <input type="time" val={time} onChange={(e) => {setTime(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Appointment Time"/>
        </div>

        <div className="md-form mb-4">
          <input type="text" val={age} onChange={(e) => {setAge(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Your Age" />
        </div>

        <div className="md-form mb-4">
          <input type="text" val={medical_condition} onChange={(e) => {setMedical_Condition(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Medical Condition" />
        </div>

        <div className="md-form mb-4"  onChange={(e) => {setGender(e.target.value)}} >
            <div className="form-check form-check-inline">
              <input className="form-check-input" value="Male" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
            </div>                                
            <div className="form-check form-check-inline">
                <input className="form-check-input" value="Female" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
            </div>
        </div>

          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={popupLogin}>
            Submit
          </Button>
        </Modal.Footer>        
      </Modal>

      <ToastContainer />
        </div>
    )
}

