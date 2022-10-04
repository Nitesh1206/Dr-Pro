import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DoctorTeam () {
    const [item, setItem] = useState([])
    const [find,setFind] = useState('')
    const [searchData,setSearchData] = useState([]);
    const customId = "custom-id-yes";

    useEffect(() => {
        fetch('https://callmydoc.herokuapp.com/api/doctors/').then((result) => {
            console.log("result", result)
            result.json().then((resp) => {
                setItem(resp)
                setSearchData(resp)
            })
        }).catch(error => {
            console.log("error", error)
        })
    }, [])



        const findEvent = (e) => {
            if(e.target.value === ''){
                setItem(searchData)
            }
            else{
               const filterResult =  searchData.filter(filterDoctor => filterDoctor.frist_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
               filterDoctor.last_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
               filterDoctor.position.toLowerCase().includes(e.target.value.toLowerCase()) ||
               filterDoctor.speciality.toLowerCase().includes(e.target.value.toLowerCase()) ||
               filterDoctor.contact[0].address.toLowerCase().includes(e.target.value.toLowerCase()) ||
               filterDoctor.contact[0].city.toLowerCase().includes(e.target.value.toLowerCase()))
                if(filterResult.length > 0){
                    setItem(filterResult)              
                }
                else{
                        toast.info('Sorry..! You Are Seearching for Wrong Detail !', {
                            position: toast.POSITION.BOTTOM_CENTER,
                            toastId: customId
                        });
                }
            }
            setFind(e.target.value)
        }

    return(
        <div>
             <div class="doctor-team team">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="section_title_container text-center">
                                <div class="section_subtitle">This is Dr Pro</div>
                                <div class="section_title"><h3>Meet the Surgeons</h3></div>
                            </div>
                            <div className="header_extra d-flex flex-row align-items-center justify-content-center ml-auto">
                                <input type="text" value={find} onInput={(e)=>findEvent(e)} className="intro_input search" placeholder="Search Your Doctor"></input>
                            </div>
                        </div>
                    </div>
                    <div class="row team_row doc-list">
                    
                          {item.map((data) =>
                        <div class="col-lg-4 team_col mt-2">
                            <div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
                                {/* <div class="team_image"><img src={data.image} alt="Doctor Image" /></div> */}
                                <div class="team_content text-center">
                                    <div class="team_name"><Link to={`/doctordetails/${data._id}`}>Dr. {data.frist_name} {data.last_name}</Link></div>
                                    <div class="team_title">{data.position}</div>
                                    <div class="team_title">{data.speciality}</div>
                                    <div class="team_text">
                                        <p className="doc-contact">{data.email}</p>
                                        <p className="doc-contact">{data.contact[0].phone_number}</p>
                                        <p className="doc-contact">{data.contact[0].address}</p>
                                        <p className="doc-contact">{data.contact[0].city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}                         
                       
                    </div>
                </div>
            </div>
            <ToastContainer limit={1} />
        </div>
    )
}