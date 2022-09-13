import React, {useState, useContext} from "react";
import { ContextPatient } from '../context/PatientContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Alert } from 'react-alert';

export default function UpdatePage({show,setShow}){
    const [name, setName] = useState('');
    const [phone_no, setPhone] = useState('');
    const [dob, setDob] = useState('');    
    const [email, setEmail] = useState('');    
    const [gender, setGender] = useState('');    
    const [patient, setValue ] = useContext(ContextPatient);

    console.log('patientid', patient._id)

function upDate(e){
    e.preventDefault();
    let item = {name:name, phone:phone_no,email:email,dob:dob,gender:gender}
    console.log('item', item);

    let output = fetch(`https://callmydoc.herokuapp.com/api/patient/update/${patient._id}`,{
        method:"PUT",
        headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
        },
        body:JSON.stringify(item)
    }).then(res=> res.json()).then(result=>{
      console.log('result', result.body);
    });
    console.log('item', item);

    let output2 = output.json();
      if(output2.msg === "Detail Upadate Successfully"){
        alert(output2.msg, {type: 'success'})
        localStorage.setItem('user-info',item)
      }
      setShow(false);
}


// componentDidMount(){
//   const upDate = {
//       method : "PUT",
//       headers : {
//                     "Accept" : "application/json",
//                     "Content-type" : "application/json"
//                 },
//                 body:JSON.stringify()
//   };

//       fetch('https://callmydoc.herokuapp.com/api/patient/update/:id', upDate)
//       .then(response => response.json())
//       .then(data => this.state)
// }

    return(
        <div>
            <div >
               <Modal show={show} onHide={setShow}  id="myModal">
        <Modal.Header closeButton>
          <Modal.Title>Edit User Detail</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
        <div className="md-form mb-4">
          <input type="text"  value={name} onChange={(e) => {setName(e.target.value)}} id="orangeForm-name" className="form-control validate" placeholder="Name" />
        </div>

        <div className="md-form mb-4">
          <input type="tel" value={phone_no} onChange={(e) => {setPhone(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Phone no."/>
        </div>

        <div className="md-form mb-4">
          <input type="email"  value={email} onChange={(e) => {setEmail(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="Email" />
        </div>

        <div className="md-form mb-4">
          <input type="date" value={dob} onChange={(e) => {setDob(e.target.value)}} id="orangeForm-pass" className="form-control validate" placeholder="DOB"/>
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
            Cancel
          </Button>
          <Button variant="primary" onClick={upDate}>
            Update
          </Button>
        </Modal.Footer>        
      </Modal>
        </div>
        </div>
    )
}