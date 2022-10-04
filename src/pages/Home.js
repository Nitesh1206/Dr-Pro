import React,{useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import CountUp, { useCountUp } from "react-countup";
import LoginPopup from "./LoginPopup";

export default function Home() {
	const history = useHistory('')
	const [show, setShow] = useState(false);
	const [search, setSearch] = useState('');
    const [search2,setSearch2] = useState('');

	const searchEvent = (e) => {
        const data = e.target.value;
        setSearch(data);
    }

    const searchEvent2 = (e) => {	
        const data2 = e.target.value;
        setSearch2(data2);
    }

	useCountUp({
		ref: "counter",
		end: 2000,
		enableScrollSpy: true,
		scrollSpyDelay: 1000
	  });

	  useCountUp({
		ref: "counter-two",
		end: 472,
		enableScrollSpy: true,
		scrollSpyDelay: 1000
	  });

	  useCountUp({
		ref: "counter-three",
		end: 825,
		enableScrollSpy: true,
		scrollSpyDelay: 1000
	  });

    return (
        <div>
                 
	{/* <!-- Home --> */}

            <div className="home">

                {/* <!-- Home Slider --> */}
                <div className="home_slider_container">
                    <div className="owl-carousel owl-theme home_slider">
                        
                        {/* <!-- Slide --> */}
                        <div className="owl-item">
                            <div className="background_image" ><img src="images/home_slider.jpg" /></div>
                            <div className="home_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="home_content">
                                                <div className="home_subtitle">#1 Plastic Surgery Clinic</div>
                                                <div className="home_title">Love the new you</div>
                                                <div className="home_text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                                </div>
												<div className="section_subtitle">Find Your Surgeon</div>
                                                <div className="home_buttons d-flex flex-row align-items-center justify-content-start">
                                                    <div className="">														
														<input type="text" value={search} onChange={searchEvent} className="intro_input search" placeholder="Search City"></input>
                        								<input type="text" value={search2} onChange={searchEvent2} className="intro_input search" placeholder="Search Name"></input>
													</div>
                                                    <div className="button button_1 trans_200"> <Link to={`/ourteam/${search}/${search2}`} >Search</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide --> */}
                        {/* <div className="owl-item">
                            <div className="background_image" ></div>
                            <div className="home_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_content">
                                                <div className="home_subtitle">#1 Plastic Surgery Clinic</div>
                                                <div className="home_title">Love the new you</div>
                                                <div className="home_text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                                </div>
                                                <div className="home_buttons d-flex flex-row align-items-center justify-content-start">
                                                    <div className="button button_1 trans_200"><a href="#">read more</a></div>
                                                    <div className="button button_2 trans_200"><a href="#">make an appointment</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <!-- Slide --> */}
                        {/* <div className="owl-item">
                            <div className="background_image" ></div>
                            <div className="home_container">
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_content">
                                                <div className="home_subtitle ">#1 Plastic Surgery Clinic</div>
                                                <div className="home_title">Love the new you</div>
                                                <div className="home_text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                                </div>
                                                <div className="home_buttons d-flex flex-row align-items-center justify-content-start">
                                                    <div className="button button_1 trans_200"><a href="#">read more</a></div>
                                                    <div className="button button_2 trans_200"><a href="#">make an appointment</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    {/* <!-- Home Slider Dots --> */}

                    <div className="home_slider_dots">
                        <ul id="home_slider_custom_dots" className="home_slider_custom_dots d-flex flex-row align-items-center justify-content-start">
                            <li className="home_slider_custom_dot trans_200 active"></li>
                            <li className="home_slider_custom_dot trans_200"></li>
                            <li className="home_slider_custom_dot trans_200"></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* <!-- Intro --> */}

	<div className="intro">
		<div className="container">
			<div className="row">

				{/* <!-- Intro Content --> */}
				<div className="col-lg-6 intro_col">
					<div className="intro_content">
						<div className="section_title_container">
							<div className="section_subtitle">This is Dr Pro</div>
							<div className="section_title"><h2>Welcome to our Clinic</h2></div>
						</div>
						<div className="intro_text">
							<p>Integer aliquet congue libero, eu gravida odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
						</div>
						<div className="milestones">
							<div className="row milestones_row">
							
								{/* <!-- Milestone --> */}
								<div className="col-md-4 milestone_col">
									<div className="milestone">
									<CountUp end={100} enableScrollSpy   />
										<div className="milestone_counter" id="counter" data-end-value="5000" data-sign-before="+">0</div>
										<div className="milestone_text">Satisfied Patients</div>
									</div>
								</div>

								{/* <!-- Milestone --> */}
								<div className="col-md-4 milestone_col">
									<div className="milestone">
									<CountUp end={100} enableScrollSpy   />
										<div className="milestone_counter" id='counter-two' data-end-value="352">0</div>
										<div className="milestone_text">Face Liftings</div>
									</div>
								</div>

								{/* <!-- Milestone --> */}
								<div className="col-md-4 milestone_col">
									<div className="milestone">
									<CountUp end={100} enableScrollSpy  />
										<div className="milestone_counter" id='counter-three' data-end-value="718">0</div>
										<div className="milestone_text">Injectibles</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
                {/* <!-- Intro Form --> */}
				<div class="col-lg-6 intro_col">
					<div class="intro_form_container">
						<div class="intro_form_title">Make an Appointment</div>
						<form  class="intro_form" id="intro_form">
							<div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
								<input type="text" class="intro_input" placeholder="Your Name" required="required" />
								<input type="email" class="intro_input" placeholder="Your E-mail" required="required" />
								<input type="tel" class="intro_input" placeholder="Your Phone" required="required" />
								<select class="intro_select intro_input" required>
									<option disabled="" selected="" value="">Speciality</option>
									<option>Speciality 1</option>
									<option>Speciality 2</option>
									<option>Speciality 3</option>
									<option>Speciality 4</option>
									<option>Speciality 5</option>
								</select>
								<select class="intro_select intro_input" required="required">
										<option disabled="" selected="" value="">Doctor</option>
										<option>Doctor 1</option>
										<option>Doctor 2</option>
										<option>Doctor 3</option>
										<option>Doctor 4</option>
										<option>Doctor 5</option>
									</select>
								<input type="text" id="datepicker" class="intro_input datepicker" placeholder="Date" required="required" />
							</div>
							<button class="button button_1 intro_button trans_200">make an appointment</button>
						</form>
					</div>
				</div>

			</div>
		</div>
	</div>

    <div class="why">
		<div class="container">
			<div class="row row-eq-height">

				{/* <!-- Why Choose Us Image --> */}
				<div class="col-lg-6 order-lg-1 order-2">
					<div class="why_image_container">
						<div class="why_image"><img src="images/why_1.jpg" alt="" /></div>
					</div>
				</div>

				{/* <!-- Why Choose Us Content --> */}
				<div class="col-lg-6 order-lg-2 order-1">
					<div class="why_content">
						<div class="section_title_container">
							<div class="section_subtitle">This is Dr Pro</div>
							<div class="section_title"><h2>Why choose us?</h2></div>
						</div>
						<div class="why_text">
							<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
						</div>
						<div class="why_list">
							<ul>

								{/* <!-- Why List Item --> */}
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="icon_container d-flex flex-column align-items-center justify-content-center">
										<div class="icon">
										<img src="images/icon_1.svg" alt="https://www.flaticon.com/authors/prosymbols" />
										</div>
									</div>
									<div class="why_list_content">
										<div class="why_list_title">Only Top Products</div>
										<div class="why_list_text">Etiam ac erat ut enim maximus accumsan vel ac nisl</div>
									</div>
								</li>

								{/* <!-- Why List Item --> */}
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="icon_container d-flex flex-column align-items-center justify-content-center">
										<div class="icon">
										<img src="images/icon_2.svg" alt="https://www.flaticon.com/authors/prosymbols" />
										</div>
									</div>
									<div class="why_list_content">
										<div class="why_list_title">The best Doctors</div>
										<div class="why_list_text">Ac erat ut enim maximus accumsan vel ac</div>
									</div>
								</li>

								{/* <!-- Why List Item --> */}
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="icon_container d-flex flex-column align-items-center justify-content-center">
										<div class="icon">
										<img src="images/icon_3.svg" alt="https://www.flaticon.com/authors/prosymbols" />
										</div>
									</div>
									<div class="why_list_content">
										<div class="why_list_title">Great Feedback</div>
										<div class="why_list_text">Etiam ac erat ut enim maximus accumsan vel</div>
									</div>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

        {/* <!-- Call to action --> */}

    <div class="cta">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="cta_container d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                        <div class="cta_content">
                            <div class="cta_title">Make your appointment today!</div>
                            <div class="cta_text">Etiam ac erat ut enim maximus accumsan vel ac nisl</div>
                        </div>
                        <div class="cta_phone ml-lg-auto">+34 586 778 8892</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Services --> */}

	<div class="services">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div class="section_title_container">
						<div class="section_subtitle">This is Dr Pro</div>
						<div class="section_title"><h2>Our Services</h2></div>
					</div>
				</div>
			</div>
			<div class="row services_row">
				
				<div class="col-xl-4 col-md-6 service_col">
					<div class="service text-center">
						<div class="service">
							<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
								<div class="icon">
								<img src="images/icon_4.svg" alt="https://www.flaticon.com/authors/prosymbols" />
								</div>
							</div>
							<div class="service_title">Breast Augmentation</div>
							<div class="service_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 service_col">
					<div class="service text-center">
						<div class="service">
							<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
								<div class="icon">
								<img src="images/icon_5.svg" alt="https://www.flaticon.com/authors/prosymbols" />
								</div>
							</div>
							<div class="service_title">Breast Augmentation</div>
							<div class="service_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 service_col">
					<div class="service text-center">
						<div class="service">
							<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
								<div class="icon">
								<img src="images/icon_6.svg" alt="https://www.flaticon.com/authors/prosymbols" />
								</div>
							</div>
							<div class="service_title">Breast Augmentation</div>
							<div class="service_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xl-4 col-md-6 service_col">
					<div class="service text-center">
						<div class="service">
							<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
								<div class="icon">
								<img src="images/icon_7.svg" alt="https://www.flaticon.com/authors/prosymbols" />
								</div>
							</div>
							<div class="service_title">Breast Augmentation</div>
							<div class="service_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xl-4 col-md-6 service_col">
					<div class="service text-center">
						<div class="service">
							<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
								<div class="icon">
								<img src="images/icon_8.svg" alt="https://www.flaticon.com/authors/prosymbols" />
								</div>
							</div>
							<div class="service_title">Breast Augmentation</div>
							<div class="service_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 service_col">
					<div class="service text-center">
						<div class="service">
							<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
								<div class="icon">
								<img src="images/icon_3.svg" alt="https://www.flaticon.com/authors/prosymbols" />
								</div>
							</div>
							<div class="service_title">Breast Augmentation</div>
							<div class="service_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

    {/* <!-- Extra --> */}

	<div class="extra">
		<div class="parallax_background parallax-window" data-parallax="scroll"  data-speed="0.8">
			<img src="images/extra.jpg" />
		</div>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="extra_container d-flex flex-row align-items-start justify-content-end">
						<div class="extra_content">
							<div class="extra_disc d-flex flex-row align-items-end justify-content-start">
								<div>30<span>%</span></div>
								<div>Discount</div>
							</div>
							<div class="extra_title">Only in August</div>
							<div class="extra_text">
								<p>Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus.</p>
							</div>
							<div class="button button_1 extra_link trans_200"><a href="#">read more</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* <!-- Newsletter --> */}

	<div class="newsletter">
		<div class="parallax_background parallax-window" data-parallax="scroll"  data-speed="0.8">
			<img src="images/newsletter.jpg" />
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

	<LoginPopup setShow={setShow} show={show}/>
	
 </div>
    )
};