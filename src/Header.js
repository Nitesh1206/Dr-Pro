import React,{useContext, useState}from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link, useHistory} from "react-router-dom";
import {ContextPatient} from './context/PatientContext';
import {ContextAuth} from './context/AuthContext';

export default function Header(){

    const [patient,setValue] = useContext(ContextPatient);
    const [login,setLogin] = useContext(ContextAuth);
    const [islogin,setIsLogin] = useState(login);
    console.log("patient", patient);
    const history = useHistory('')
    function logout(){
        setIsLogin(false)
    localStorage.clear()
   history.push('/login')
}

    return(
        <div>
                    {/* <!-- Header --> */}

            <header className="header trans_400">
                <div className="header_content d-flex flex-row align-items-center jusity-content-start trans_400">

                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <Link to ="/">
                            <div>Surg<span>PRO</span></div>
                            <div>Plastic Surgery</div>
                        </Link>
                    </div>

                    {/* <!-- Main Navigation --> */}
                    <nav className="main_nav">
                        <ul className="d-flex flex-row align-items-center justify-content-start">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to ="/about">About us</Link></li>
                            <li><Link to="/doctorteam">Our Team</Link></li>
                            <li><Link to ="/hospitals">Hospitals</Link></li>
                            <li><Link to ="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="header_extra d-flex flex-row align-items-center justify-content-end ml-auto">
                        
                       {islogin ? <>
                        <div className="button button_1 header_button"><Link to="/patient">{patient.name}</Link></div>
                        <div className="button button_1 header_button" onClick={logout}><Link to="">LogOut</Link></div>
                        </>
                        :
                        <>
                        <div className="button button_1 header_button"><Link to="/login">Login</Link></div>
                        
                        <div className="button button_1 header_button"><Link to="/signup">SignUp</Link></div>
                        </>}


                        <div className="social header_social">
                            <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li><Link to="#"><FaFacebookF /></Link></li>
                                <li><Link to="#"><FaInstagram /></Link></li>
                                <li><Link to="#"><FaTwitter /></Link></li>
                            </ul>
                        </div>

                        {/* <!-- Hamburger --> */}
                        <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
                    </div>
                </div>
            </header>

            {/* <!-- Menu --> */}

            <div className="menu_overlay trans_400"></div>
            <div className="menu trans_400">
                <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
                <nav className="menu_nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="blog.html">News</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div className="menu_extra">
                    <div className="menu_link">Mo - Sat: 8:00am - 9:00pm</div>
                    <div className="menu_link">+34 586 778 8892</div>
                    <div className="menu_link"><a href="#">Make an appointment</a></div>
                </div>
                <div className="social menu_social">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}