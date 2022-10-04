import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/table";
import UpdatePage from "./UpdatePage";

export default function Patient() {
    const history = useHistory('')
    const id = localStorage.getItem('userid')
    console.log("id", id)
    const [item, setItem] = useState({})
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('https://callmydoc.herokuapp.com/api/patientbyid/' + id).then((result) => {
            console.log("result", result)
            result.json().then((resp) => {
                setItem(resp)
            })
        }).catch(error => {
            console.log("error", error)
        })
    }, [id])
    console.log('item', item)
  

    function appointment(info) {
        console.log('info', info);
        fetch("https://callmydoc.herokuapp.com/api/appointmentByPatientId?id=" + info)
            .then((result) => {
                return result.json()
            }).then((resp) => {
                    setData(resp)
                })
            
    }
    console.log("12345678", data)

    function edit () {
        if(!localStorage.getItem('userid'))
    {
            history.push("/login")
        }else{
            setShow(true)
        }
    }

    function cancelAppointment(_id){
        fetch(`https://callmydoc.herokuapp.com/api/patient-appointment/${_id}`,{
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp)=>{
                console.log("resp",resp)
            })
        })
    }

    return (
        <div>
            <div className="cta patient">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cta_container d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                <div className="cta_content">
                                    <div className="cta_title">Know About You</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="intro_content">
                                <div className="section_title_container">
                                    <div className="title" >
                                        <h2>{item.name}
                                        </h2>  
                                    </div>   
                                </div>
                                <div className="intro_text">
                                    <h5>{item.basic_info}</h5>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Email</div>
                                                <div className="text">{item.email}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">PhoneNo.</div>
                                                <div className="text">{item.phone_no}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">DateOfBirth</div>
                                                <div className="text">{item.dob}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Gender</div>
                                                <div className="text">{item.gender}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-12 milestone_col">
                                            <div className="milestone ">
                                                {[item].map((id) =>
                                                 <button className="btn bt ap mb-3 button button_1 header_button" onClick={e => appointment(id._id)} >Upcoming Appointment</button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12 milestone_col appoint-table">
                                            <div className="milestone">
                                                <div className="text">

                                                    <Table striped bordered hover className="wid">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Email</th>
                                                                <th>Phone No.</th>
                                                                <th>Gender</th>
                                                                <th>Age</th>
                                                                <th>Appoint Date</th>
                                                                <th>Appoint Time</th>
                                                                <th>Medical Condition</th>
                                                                <th>Doctor Name</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {data.map((info) =>
                                                                <tr>
                                                                    <td>{info.name}</td>
                                                                    <td>{info.email}</td>
                                                                    <td>{info.phone_no}</td>
                                                                    <td>{info.gender}</td>
                                                                    <td>{info.age}</td>
                                                                    <td>{info.date}</td>
                                                                    <td>{info.time}</td>
                                                                    <td>{info.medical_condition}</td>                                                                    
                                                                    <td><button className="btn bt ap mb-3 button button_1 header_button" onClick={(e) => {cancelAppointment((info._id))}}>Cancel</button></td>
                                                                </tr>
                                                            )}

                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                        <button className="btn bt ap mb-3 button button_1 header_button edit" onClick={edit}>EDIT</button>
                        </div>
                    </div>
                </div>
            </div>

            <UpdatePage setShow={setShow} show={show}/>
        </div>
    )
}