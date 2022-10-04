import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function HospitalDetails() {

        const {id} = useParams();
       const [hospitalData, setHospitalData] = useState ([]);

    //    useEffect(() => {
    //         fetch(`https://buddysfood.herokuapp.com/api/hospital/${id}`).then((result) =>{
    //             console.log("hospdata",result);
    //             result.json().then((resp) => {
    //                 setHospitalData(resp);
    //                 console.log("hodata",hospitalData);
    //             })
    //         })
    //    },[id])

    const hospital = async () => {
        const response = await fetch(`https://buddysfood.herokuapp.com/api/hospital/${id}`)
        if(!response.ok){
            throw new Error ('data not found')
        }else{
            return response.json();
        }
    }

    useEffect (() => {
        hospital().then((res) => {
            setHospitalData(res)
            console.log("hospital321",hospitalData)
        })
        .catch((e) =>{
            console.log(e.message)
        })
    },[])
      

  return (
    <div>
         <div className="cta doctor">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cta_container d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                            <div className="cta_content">
                                <div className="cta_title">Hospital Details</div>
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
                                    <h2>{hospitalData.name}</h2>
                                </div>
                            </div>
                            <div className="intro_text">
                                <h5>{hospitalData.address}</h5>
                            </div>
                            <div className="intro_text">
                                <h5></h5>
                            </div>
                                <div className="milestones ">
                                    <div className="row milestones_row ">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Timing</div>
                                                <div className="text">{hospitalData.timing}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Contact Details</div>
                                                <div className="text">{hospitalData.contact}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">Number of Beds</div>
                                                <div className="text">{hospitalData.hospitalBedCount}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">City</div>
                                                <div className="text">{hospitalData.city}</div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                                <div className="milestones">
                                    <div className="row milestones_row">
                                        <div className="col-md-6 milestone_col">
                                            <div className="milestone">
                                                <div className="counter">State</div>
                                                <div className="text">{hospitalData.state}</div>
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
                    <button className="button button_1 intro_button appointment trans_200" >Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
