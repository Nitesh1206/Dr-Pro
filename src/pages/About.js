import React from 'react';
import CountUp, { useCountUp } from "react-countup";

export default function About () {
    
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
		scrollSpyDelay: 3000
	  });

	  useCountUp({
		ref: "counter-three",
		end: 825,
		enableScrollSpy: true,
		scrollSpyDelay: 2000
	  });

	  useCountUp({
		ref: "counter-four",
		end: 5,
		enableScrollSpy: true,
		scrollSpyDelay: 2000
	  });

return (
    <div>
                {/* <!-- Home --> */}

            <div class="home about d-flex flex-column align-items-start justify-content-end">
                <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/about.jpg" data-speed="0.8"></div>
                <div class="home_overlay"></div>
                <div class="home_container about">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="home_content">
                                    <div class="home_title">About us</div>
                                    <div class="home_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Intro --> */}

	<div class="intro about">
		<div class="container">
			<div class="row">

				{/* <!-- Intro Content --> */}
				<div class="col-lg-8">
					<div class="intro_content">
						<div class="section_title_container">
							<div class="section_subtitle">This is Dr Pro</div>
							<div class="section_title"><h2>Welcome to our Clinic</h2></div>
						</div>
						<div class="intro_text">
							<p>Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum. Etiam ac erat ut enim maximus accumsan vel acnisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum.</p>
						</div>

						
						<div class="milestones">
							<div class="row milestones_row">
							
								
								<div class="col-md-3 milestone_col">
									<div class="milestone">
									<CountUp end={100} enableScrollSpy   />
										<div class="milestone_counter" id="counter"data-end-value="5000" data-sign-before="+">0</div>
										<div class="milestone_text">Satisfied Patients</div>
									</div>
								</div>

								
								<div class="col-md-3 milestone_col">
									<div class="milestone">
									<CountUp end={100} enableScrollSpy   />
										<div class="milestone_counter" id="counter-two" data-end-value="352">0</div>
										<div class="milestone_text">Face Liftings</div>
									</div>
								</div>

								
								<div class="col-md-3 milestone_col">
									<div class="milestone">
									<CountUp end={100} enableScrollSpy   />
										<div class="milestone_counter" id="counter-three" data-end-value="718">0</div>
										<div class="milestone_text">Injectibles</div>
									</div>
								</div>

								
								<div class="col-md-3 milestone_col">
									<div class="milestone">
									<CountUp end={100} enableScrollSpy   />
										<div class="milestone_counter" id="counter-four" data-end-value="5">0</div>
										<div class="milestone_text">Awards Won</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>

				{/* <!-- Intro Image --> */}
				<div class="col-lg-3 offset-lg-1">
					<div class="intro_image about"><img src="images/intro_1.jpg" alt="" /></div>
				</div>
			</div>
		</div>
	</div>

    

	{/* <div class="testimonials">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title_container text-center">
						<div class="section_subtitle">This is Dr Pro</div>
						<div class="section_title"><h2>Clients Testimonials</h2></div>
					</div>
				</div>
			</div>
			<div class="row testimonials_row">
				<div class="col">
					<div class="quote d-flex flex-column align-items-center justify-content-center ml-auto mr-auto"><img src="images/quote.png" alt="" /></div>

					
					<div class="test_slider_container">
						<div class="owl-carousel owl-theme test_slider">
							
							
							<div class="owl-item">
								<div class="test_item text-center">
									<div class="test_text">
										<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
									</div>
									<div class="test_info d-flex flex-row align-items-center justify-content-center">
										<div class="test_image"><img src="images/test.jpg" alt="" /></div>
										<div class="test_text">Maria Williams, <span>Patient</span></div>
									</div>
								</div>
							</div>

							
							<div class="owl-item">
								<div class="test_item text-center">
									<div class="test_text">
										<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
									</div>
									<div class="test_info d-flex flex-row align-items-center justify-content-center">
										<div class="test_image"><img src="images/test.jpg" alt="" /></div>
										<div class="test_text">Maria Williams, <span>Patient</span></div>
									</div>
								</div>
							</div>

							
							<div class="owl-item">
								<div class="test_item text-center">
									<div class="test_text">
										<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
									</div>
									<div class="test_info d-flex flex-row align-items-center justify-content-center">
										<div class="test_image"><img src="images/test.jpg" alt="" /></div>
										<div class="test_text">Maria Williams, <span>Patient</span></div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}

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

           

	<div class="team about">
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
				
				
				<div class="col-lg-4 team_col">
					<div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
						<div class="team_image"><img src="images/team_1.jpg" alt="" /></div>
						<div class="team_content text-center">
							<div class="team_name"><a href="#">Michael Smith</a></div>
							<div class="team_title">Plastic Surgeon</div>
							<div class="team_text">
								<p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>

				
				<div class="col-lg-4 team_col">
					<div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
						<div class="team_image"><img src="images/team_2.jpg" alt="" /></div>
						<div class="team_content text-center">
							<div class="team_name"><a href="#">Samantha Doe</a></div>
							<div class="team_title">Plastic Surgeon</div>
							<div class="team_text">
								<p>Ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
							</div>
						</div>
					</div>
				</div>

				
				<div class="col-lg-4 team_col">
					<div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
						<div class="team_image"><img src="images/team_3.jpg" alt="" /></div>
						<div class="team_content text-center">
							<div class="team_name"><a href="#">James Carl</a></div>
							<div class="team_title">Plastic Surgeon</div>
							<div class="team_text">
								<p>Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna. Odio ultrices ut.</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

        <div class="newsletter">
            <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/newsletter.jpg" data-speed="0.8"></div>
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
};