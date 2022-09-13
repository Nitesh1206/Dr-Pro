import React from "react";
import {Link} from "react-router-dom";
export default function Footer(){

    return(
        <div>

            <footer class="footer">
                <div class="footer_content">
                    <div class="container">
                        <div class="row">

                           
                            <div class="col-lg-3 footer_col">
                                <div class="footer_about">
                                    <div class="footer_logo">
                                        <a href="#">
                                            <div>Dr<span>PRO</span></div>
                                            <div>Plastic Surgery</div>
                                        </a>
                                    </div>
                                    <div class="footer_about_text">
                                        <p>Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci eleme ntum eleifend tempor, nunc libero porttitor tellus.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 footer_col">
                                <div class="footer_contact">
                                    <div class="footer_title">Contact Info</div>
                                    <ul class="contact_list">
                                        <li>+53 345 7953 32453</li>
                                        <li>yourmail@gmail.com</li>
                                        <li>contact@gmail.com</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 footer_col">
                                <div class="footer_location">
                                    <div class="footer_title">Our Locations</div>
                                    <ul class="locations_list">
                                        <li>
                                            <div class="location_title">Miami</div>
                                            <div class="location_text">45 Creekside Av  FL 931</div>
                                        </li>
                                        <li>
                                            <div class="location_title">Los Angeles</div>
                                            <div class="location_text">1481 Creekside Lane Avila Beach, CA 931</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                         
                            <div class="col-lg-3 footer_col">
                                <div class="opening_hours">
                                    <div class="footer_title">Opening Hours</div>
                                    <ul class="opening_hours_list">
                                        <li class="d-flex flex-row align-items-start justify-content-start">
                                            <div>Monday:</div>
                                            <div class="ml-auto">8:00am - 9:00pm</div>
                                        </li>
                                        <li class="d-flex flex-row align-items-start justify-content-start">
                                            <div>Thuesday:</div>
                                            <div class="ml-auto">8:00am - 9:00pm</div>
                                        </li>
                                        <li class="d-flex flex-row align-items-start justify-content-start">
                                            <div>Wednesday:</div>
                                            <div class="ml-auto">8:00am - 9:00pm</div>
                                        </li>
                                        <li class="d-flex flex-row align-items-start justify-content-start">
                                            <div>Thursday:</div>
                                            <div class="ml-auto">8:00am - 9:00pm</div>
                                        </li>
                                        <li class="d-flex flex-row align-items-start justify-content-start">
                                            <div>Friday:</div>
                                            <div class="ml-auto">8:00am - 7:00pm</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer_bar">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="footer_bar_content  d-flex flex-md-row flex-column align-items-md-center justify-content-start">
                                    <div class="copyright">
            </div>
                                    <nav class="footer_nav ml-md-auto">
                                        <ul class="d-flex flex-row align-items-center justify-content-start">
                                            <li><Link to ="index.html">Home</Link></li>
                                            <li><Link to ="about.html">About us</Link></li>
                                            <li><Link to ="services.html">Services</Link></li>
                                            <li><Link to ="blog.html">News</Link></li>
                                            <li><Link to ="contact.html">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>			
                </div>
            </footer>

        </div>
    )
}