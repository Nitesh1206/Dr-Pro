import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ContextDoctor } from "../context/DoctorContext";
import { ContextPatient } from "../context/PatientContext";
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble, FaPinterest, FaLinkedin } from "react-icons/fa";

export default function Contact(){

    const {id,frist_name,last_name} = useParams();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone_no, setPhone_no] = useState('')
    const [date,setDate] = useState('')
    const [age,setAge] = useState('')
    const [time,setTime] = useState('')
    const [gender,setGender] = useState('')
    const [medical_condition,setMedical_Condition] = useState('')
    const [patient,setPatient] = useContext(ContextPatient)
    const [doctor,setDoctor] = useContext(ContextDoctor)

    console.log("doctor@987",doctor)

    const appointment = async (e) => {
        e.preventDefault();
        let detail = {name: name, email: email, Contact: phone_no, date: date, age: age, time:time,
            gender:gender, medical_condition: medical_condition,patient: patient._id, doctor: doctor}
            
        console.log(detail)
        let result = await fetch('https://callmydoc.herokuapp.com/api/patient-appointment',{
            method: "POST",
            header: {
                "Accept" : "application/json",
                "content-type" : "application/json" 
            },
            body: JSON.stringify(detail)
        });
            console.log("doc-result",result);
            let result2 = await result.json();
            if(result2.msg === "Appointment Book Successfully"){
                toast.info("Appointment Book Successfully",{
                    position : toast.POSITION.BOTTOM_RIGHT
                });
            }
    }

    return(
    <div>

        <div class="home contact d-flex flex-column align-items-start justify-content-end">
            <div class="parallax_background parallax-window" data-parallax="scroll"  data-speed="0.8">
                <img src="images/contact.jpg" alt="Contact Page"></img>
            </div>
            <div class="home_overlay"><img src="images/home_overlay.png" alt="Contact Page" /></div>
            <div class="home_container ">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="home_content">
                                <div class="home_title">Contact</div>
                                <div class="home_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
	{/* <!-- Contact --> */}

<div class="contact">
    <div class="container">
        <div class="row">

            {/* <!-- Contact Form --> */}
            <div class="col-lg-6">
                <div class="contact_form_container">
                    <div class="contact_form_title">Make an Appointment</div>
                    <form action="#" class="contact_form" id="contact_form">
                        <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} class="contact_input" placeholder="Your Name" required="required" />
                            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} class="contact_input" placeholder="Your E-mail" required="required" />
                            <input type="tel" value={phone_no} onChange={(e) => {setPhone_no(e.target.value)}} class="contact_input" placeholder="Your Phone" required="required" />
                            <input type="text" value={age} onChange={(e) => {setAge(e.target.value)}} class="contact_input" placeholder="Your Age" required="required" />
                            <input type="text" value={medical_condition} onChange={(e) => {setMedical_Condition(e.target.value)}} class="contact_input" placeholder="Medical Condition" required="required" />
                            <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}} class="contact_input" placeholder="Appointment Date" required="required" />
                            <input type="time" value={time} onChange={(e) => {setTime(e.target.value)}} class="contact_input" placeholder="Appointment Time" required="required" />
                            
                            <div className="md-form mt-4 " onChange={(e) => {setGender(e.target.value)}}>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" value="Male" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                </div>                               
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" value="Female" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                </div>
                            </div>
                    
                        </div>
                        <button class="button button_1 contact_button trans_200" onClick={appointment}>make an appointment</button>
                    </form>
                </div>
            </div>

            {/* <!-- Contact Content --> */}
            <div class="col-lg-5 offset-lg-1 contact_col">
                <div class="contact_content">
                    <div class="contact_content_title">Get in touch with us</div>
                    <div class="contact_content_text">
                        <p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feug iat bibendum orci, non elementum urna. Cras sit amet sapien aliquam.</p>
                    </div>
                    <div class="direct_line d-flex flex-row align-items-center justify-content-start">
                        <div class="direct_line_title text-center">Direct Line</div>
                        <div class="direct_line_num text-center">+53 345 7953 324</div>
                    </div>
                    <div class="contact_info">
                        <ul>
                            <li class="d-flex flex-row align-items-start justify-content-start">
                                <div>Address</div>
                                <div>1481 Creekside Lane Avila Beach, CA 931</div>
                            </li>
                            <li class="d-flex flex-row align-items-start justify-content-start">
                                <div>Phone</div>
                                <div>+53 345 7953 32453</div>
                            </li>
                            <li class="d-flex flex-row align-items-start justify-content-start">
                                <div>E-mail</div>
                                <div>yourmail@gmail.com</div>
                            </li>
                        </ul>
                    </div>
                    <div class="contact_social">
                        <ul class="d-flex flex-row align-items-center justify-content-start">
                            <li><Link to="#"><FaFacebookF /></Link></li>
                            <li><Link to="#"><FaInstagram /></Link></li>
                            <li><Link to="#"><FaTwitter /></Link></li>
                            <li><Link to="#"><FaDribbble /></Link></li>
                            <li><Link to="#"><FaPinterest /></Link></li>
                            <li><Link to="#"><FaLinkedin /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="row google_map_row"> */}
				{/* <div class="col"> */}
					
					{/* <!-- Contact Map --> */}

					{/* <div class="contact_map"> */}

						{/* <!-- Google Map --> */}
						
						{/* <div class="map">
							<div id="google_map" class="google_map">
								<div class="map_container">
									<div id="map"></div>
								</div>
							</div>
						</div> */}

					{/* </div> */}

				{/* </div> */}
			{/* </div> */}
        </div>
    </div>

            {/* <!-- Newsletter --> */}

        <div class="newsletter">
            <div class="parallax_background parallax-window" data-parallax="scroll"  data-speed="0.8">
                <img src="images/newsletter.jpg" alt="Newsletter"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="newsletter_title">Subscribe to our newsletter</div>
                    </div>
                </div>
                <div class="row newsletter_row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="newsletter_form_container">
                            <form action="#" id="newsleter_form" class="newsletter_form">
                                <input type="email" class="newsletter_input" placeholder="Your E-mail" required="required" />
                                <button class="newsletter_button">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
</div>
    
</div>
    )
}