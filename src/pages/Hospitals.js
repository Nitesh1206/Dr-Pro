import React, { useState,useEffect } from 'react';
import Table from "react-bootstrap/table";
import { Link } from 'react-router-dom';

export default function Hospitals (){

    const [hospitalList, setHospitalList] = useState([]);

    useEffect(() => {
        fetch('https://buddysfood.herokuapp.com/api/hospital').then((result) => {
            console.log("result123", result);
            result.json().then((res) => {
                setHospitalList(res);
                console.log("hospital-list", hospitalList);
            })
        }).catch(error => {
            console.log("error", error)
        })       
    },[hospitalList])
    
    return(
        <div>
            <div className="cta patient">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cta_container d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                <div className="cta_content">
                                    <div className="cta_title">Hospitals List</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intro_content">
                                <div className="section_title_container">
                                    <div className="title" >
                                        <h2>hospitals List
                                        </h2>  
                                    </div>   
                                </div>
                                <div className="intro_text">
                                    <h5>intro</h5>
                                </div>
                    

                                <div className="milestones">
                                    <div className="row justify-content-center milestones_row">
                                        <div className="col-md-12 milestone_col appoint-table">
                                            <div className="milestone">
                                                <div className="text">
                                                {hospitalList.map((list) =>
                                                    <Table striped bordered hover className="wid">
                                                        <thead>
                                                            <tr>
                                                                <th>Name of Hospital</th>
                                                                <th>Hospital Details</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>{list.name}</td>                                                                   
                                                                <td><div className="button button_1 header_button hospitals"><Link to={`/hospitaldetails/${list._id}`}>Details</Link></div></td>
                                                            </tr>                                                          
                                                        </tbody>
                                                    </Table>
                                                )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}