import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ContextAuth } from '../context/AuthContext';
import LoginPopup from "./LoginPopup";

export default function DoctorDetails(){
    const history = useHistory('')
    const { login,setLogin } = useContext(ContextAuth);
    console.log("login",login)

    const [islogin,setIsLogin] = useState(login);
    const {id} = useParams();
    const [item, setItem] = useState([])
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch(`https://callmydoc.herokuapp.com/api/doctors/${id}`).then((result) => {
            return result.json().then((resp) => {
                setItem(resp)
            })
        })
    }, [id])
    console.log('item',item)
    function loginpopup () {
        if(!localStorage.getItem('userid'))
    {
            history.push("/login")
        }else{
            setShow(true)
        }
    }
    console.log("show",show)
    return(
        <div>
        <div className="cta">
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
                {/* {item.map((item) => */}
                    <div className="col-lg-8 " >
                        <div className="intro_content">
                            <div className="section_title_container">
                                <div className="title">
                                    <h2>{item.frist_name} {item.last_name}</h2>
                                </div>
                            </div>
                            <div className="intro_text">
                                <h5>{item.speciality}</h5>
                            </div>
                            <div className="intro_text">
                                <h5>{item.biography}</h5>
                            </div>
                                <div className="milestones ">
                                    <div className="row milestones_row ">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Email</div>
                                                <div className="text">{item.email}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">PhoneNo.</div>
                                                <div className="text">{item.contact?.[0].phone_number}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Position</div>
                                                <div className="text">{item.position}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Timings</div>
                                                <div className="text">{item.morning_time}{item.evening_time}</div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Experience Center</div>
                                                <div className="text">{item.experiance?.[0].exp_center}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Experience Location</div>
                                                <div className="text">{item.experiance?.[0].exp_location}</div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Start Year</div>
                                                <div className="text">{item.experiance?.[0].start_year}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">End Year</div>
                                                <div className="text">{item.experiance?.[0].end_year}</div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                            <div className="milestones">
                                <div className="row milestones_row">
                                    <div className="col-md-12 milestone_col appoint-table">
                                        <div className="milestone">
                                            <div className="text">
                                                {/* <Table striped bordered hover className="wid">
                                                    <thead>
                                                        <tr>
                                                            <th>Patient Name</th>
                                                            <th>Phone No.</th>
                                                            <th>Gender</th>
                                                            <th>Age</th>
                                                            <th>Appoint Date</th>
                                                            <th>Appoint Time</th>
                                                            <th>Doctor's Name</th>
                                                            <th>Doctor's No.</th>
                                                            <th>Doctor's Address</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>Patient Name</td>
                                                            <td>Phone No.</td>
                                                            <td>Gender</td>
                                                            <td>Age</td>
                                                            <td>Appoint Date</td>
                                                            <td>Appoint Time</td>
                                                            <td>Doctor's Name</td>
                                                            <td>Doctor's No.</td>
                                                            <td>Doctor's Address</td>
                                                        </tr>
                                                    </tbody>

                                                </Table> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                 {/* )} */}
                    <div className="col-lg-3 offset-lg-1">
                    <button className="button button_1 intro_button trans_200" onClick={ e =>loginpopup(id._id)} >Make An Appointment</button>
                    </div>
                </div>
            </div>
        </div>
<LoginPopup setShow={setShow} show={show}/>
    </div>
    )
}