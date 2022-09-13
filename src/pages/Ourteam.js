import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Ourteam(){

    const {search, search2} = useParams();

    const [item, setItem] = useState([])
    
    useEffect(() => {
        fetch(`https://callmydoc.herokuapp.com/api/search/${search}/${search2}`).then((result) => {
          result.json().then((resp) => {
            const filteredData = resp.filter((oneRespone) => {
              return oneRespone.contact[0].city.toLowerCase().includes(search.toLowerCase()) &&
              oneRespone.frist_name.toLowerCase().includes(search2.toLowerCase()) ||
              oneRespone.position.toLowerCase().includes(search2.toLowerCase()) || 
              oneRespone.speciality.toLowerCase().includes(search2.toLowerCase())
            });
            setItem(filteredData);
          })
        })
      }, [])

    return(
        <div>

            <div class="doctor-team team">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="section_title_container text-center">
                                <div class="section_subtitle">This is Dr Pro</div>
                                <div class="section_title"><h2>Meet the Surgeons</h2></div>
                            </div>
                        </div>
                    </div>
                    <div class="row team_row">

                          {item.map((data) =>
                        <div class="col-lg-4 team_col">
                            <div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
                                <div class="team_image"><img src="" alt="" /></div>
                                <div class="team_content text-center">
                                    <div class="team_name"><Link to={`/doctordetails/${data._id}`}>Dr. {data.frist_name} {data.last_name}</Link></div>
                                    <div class="team_title">{data.position}</div>
                                    <div class="team_text">
                                        <p>{data.contact[0].city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}