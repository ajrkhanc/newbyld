import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

import Link from 'next/link'

function Nav() {
    return (
        <>

            <div className="navbar-area formobile">
                <div className="mobile-nav">
                    <a href="/" className="logo">
                        <img src="/assets/img/kblogo.png" alt="Logo" />
                    </a>
                    <ResponsiveNavbar

                        styles={{
                            navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
                            navigationBarSmall: {
                                backgroundColor: 'aliceblue',
                            },
                            navigationCardSmall: {
                                backgroundColor: 'aliceblue',
                            },
                        }}
                    >
                        <nav class="mean-nav dblock">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">PRODUCTS &amp; SERVICES <i class="bx bx-chevron-down"></i></a>

                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/products-services/slii-experience" class="nav-link">The SLII Experience™</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/blanchard-management-essentials" class="nav-link">Blanchard Management Essentials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/self-leadership" class="nav-link">Self Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/coaching-essentials" class="nav-link">Coaching Essentials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/building-trust" class="nav-link">Building Trust</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/leading-people-through-change" class="nav-link">Leading People Through Change</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/team-leadership" class="nav-link">Team Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/customer-service-training" class="nav-link">Legendary Service</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/online-learning-training" class="nav-link">Online Learning</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/coaching-services" class="nav-link">Coaching Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/conversational-capacity" class="nav-link">Conversational Capacity</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>
                                <li class="nav-item">
                                    <a href="/how-we-work-with-you" class="nav-link">HOW WE WORK WITH YOU</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">EVENTS &amp; WORKSHOP
                                        <i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item d-none">
                                            <a href="/events-workshops/program-experience-webinar" class="nav-link">Program Experience &amp; Webinars</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/events-workshops/virtual-public-workshop" class="nav-link">Virtual Public Workshops</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>

                                <li class="nav-item">
                                    <a href="/about-us" class="nav-link">ABOUT US<i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/about-us/meet-the-team" class="nav-link">Meet The Team</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">RESOURCES</a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/blog" class="nav-link">BLOG</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/podcast">Podcast</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/ebooks">Ebooks</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/white-paper">White Paper</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item mean-last">
                                    <a href="/get-started" class="nav-link">GET STARTED</a>
                                </li>


                            </ul>
                        </nav>
                    </ResponsiveNavbar>
                </div>
                <div className="main-nav nav-two">
                    <div className="container-fluid">
                        <div className="container-max">
                            <nav className="navbar navbar-expand-md navbar-light ">
                                <Link href="/"><a className="navbar-brand"><img src="/assets/img/kblogo.png" alt="Logo" /></a></Link>
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link href="/what-we-do">
                                                <a className="nav-link active">What We Do <i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="/what-we-do/leadership-development/propel-by-blanchard">Propel by Blanchard</a>
                                                        <p>
                                                            Membership accelerates leadership and professional growth through live, facilitated courses, best-in-class online content, and collaborative experiences.
                                                        </p>
                                                        <a href="/what-we-do/custom-solutions">Blanchard Design Studio</a>
                                                        <p>Our solutions combine our award-winning content and methodologies with a collaborative design process.</p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="/what-we-do">What We Do <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/what-we-do/leadership-development">Leadership Development</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/leadership-development-programs">Leadership Development Programs</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/learning-journeys">Learning Journeys</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/digital-virtual-learning-experiences">Digital & Virtual Learning Experiences</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/propel-by-blanchard">Propel by Blanchard</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/keynotes">Keynotes</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/content-licensing">Content Licensing</a></li>
                                                                    <li><a className="" href="/resources/public-courses">Public Courses</a></li>
                                                                    <li><a href="/what-we-do/leadership-development/training-for-trainers">Training for Trainers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/what-we-do/services">Services</a></li>
                                                                    <li><a href="/what-we-do/services/coaching">Coaching</a></li>
                                                                    <li><a href="/what-we-do/services/facilitation">Facilitation</a></li>
                                                                    <li><a href="/what-we-do/services/measurement-impact">Measurement & Impact</a></li>
                                                                    <li><a href="/what-we-do/services/assessments">Assessments</a></li>
                                                                    <li><a href="/what-we-do/services/moderation-community-management">Moderation & Community Management</a></li>
                                                                    <li><a href="/what-we-do/services/reinforcement-sustainment">Reinforcement & Sustainment</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/what-we-do/custom-solutions">Custom Solutions by Blanchard Design Studio</a></li>
                                                                    <li><a className="" href="/what-we-do/custom-solutions/curated-learning-journeys">Curated Learning Journeys</a></li>
                                                                    <li><a href="/what-we-do/custom-solutions/customized-learning-experiences">Customized Learning Experiences</a></li>
                                                                    <li><a href="/what-we-do/custom-solutions/custom-coaching">Custom Coaching Solutions</a></li>
                                                                    <li><a href="/what-we-do/custom-solutions/executive-development">Executive Development Experiences</a></li>
                                                                    <li><a href="/what-we-do/custom-solutions/content-integration">Content Integration</a></li>
                                                                    <li><a href="/what-we-do/custom-solutions/talent-strategy">Talent Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/who-we-help"><a className="nav-link">Who We Help  <i className='bx bx-chevron-down'></i></a></Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="/who-we-help/leaders-at-all-levels/new-managers">New Managers</a>
                                                        <p>
                                                            When you promote your high potential individual contributors into their first people manager role, you want to ensure they are successful.
                                                        </p>
                                                        <a href="/who-we-help/leaders-at-all-levels/senior-leaders">Senior Leaders</a>
                                                        <p>These leaders are the key to creating an inclusive, high performance workplace culture that reflects the company’s values.</p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="/who-we-help">Who We Help <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/who-we-help/leaders-at-all-levels">Leaders At All Levels</a></li>
                                                                    <li><a href="/who-we-help/leaders-at-all-levels/emerging-leaders">Emerging Leaders</a></li>
                                                                    <li><a href="/who-we-help/leaders-at-all-levels/new-managers">New Managers</a></li>
                                                                    <li><a href="/who-we-help/leaders-at-all-levels/experienced-leaders">Experienced Leaders</a></li>
                                                                    <li><a href="/who-we-help/leaders-at-all-levels/senior-leaders">Senior Leaders</a></li>
                                                                    <li><a href="/who-we-help/leaders-at-all-levels/executives">Executives</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/who-we-help/organizations">Organizations</a></li>
                                                                    <li><a className="headlist" href="/who-we-help/training-professionals">Training Professionals</a></li>
                                                                    <li><a className="headlist" href="/who-we-help/coaching-professionals">Coaching Professionals</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/who-we-help/teams">Teams</a></li>
                                                                    <li><a className="headlist" href="/who-we-help/individuals">Individuals</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/our-content">
                                                <a className="nav-link">Our Content
                                                    <i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="/our-content/programs/courageous-inclusion">Courageous Inclusion</a>
                                                        <p>
                                                            The program teaches participants how to become more knowledgeable and active advocates of inclusion in their workplace.
                                                        </p>
                                                        <a href="/our-content/programs/essential-motivators">Essential Motivators Program</a>
                                                        <p>Learners identify their pattern of core psychological needs, values, talents, and behaviors so they can better understand themselves and others.</p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="/our-content">Our Content <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/our-content/programs">Programs</a></li>
                                                                    <li><a href="/our-content/programs/slii">SLII<sup>®</sup>—Powering Inspired Leaders™</a></li>
                                                                    <li><a href="/our-content/programs/blanchard-management-essentials">Blanchard Management Essentials<sup>®</sup></a></li>
                                                                    <li><a href="/our-content/programs/building-trust">Building Trust</a></li>
                                                                    <li><a href="/our-content/programs/coaching-essentials">Coaching Essentials<sup>®</sup></a></li>
                                                                    <li><a href="/our-content/programs/conversational-capacity">Conversational Capacity<sup>®</sup></a></li>
                                                                    <li><a href="/our-content/programs/courageous-inclusion">Courageous Inclusion™</a></li>
                                                                    <li><a href="/our-content/programs/essential-motivators">Essential Motivators™</a></li>
                                                                    <li><a className="headlist" href="/our-content/programs">See All Programs</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li className="ptt-35"></li>
                                                                    <li><a href="/our-content/programs/leadership-point-of-view">Leadership Point of View™</a></li>
                                                                    <li><a href="/our-content/programs/leading-people-through-change">Leading People through Change<sup>®</sup></a></li>
                                                                    <li><a href="/our-content/programs/leading-virtually">Leading Virtually™</a></li>
                                                                    <li><a href="/our-content/programs/legendary-service">Legendary Service<sup>®</sup></a></li>
                                                                    <li><a href="/our-content/programs/self-leadership">Self Leadership</a></li>
                                                                    <li><a href="/our-content/programs/servant-leadership-essentials">Servant Leadership Essentials™</a></li>
                                                                    <li><a href="/our-content/programs/team-leadership">Team Leadership</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/our-content/challenges">Challenges</a></li>
                                                                    <li><a href="/our-content/challenges/leadership-capabilities">Leadership Capabilities</a></li>
                                                                    <li><a href="/our-content/challenges/change-agility">Change & Agility</a></li>
                                                                    <li><a href="/our-content/challenges/diversity-inclusion">Diversity & Inclusion</a></li>
                                                                    <li><a href="/our-content/challenges/engagement-retention">Engagement & Retention</a></li>
                                                                    <li><a href="/our-content/challenges/organizational-performance">Organizational Performance</a></li>
                                                                    <li><a href="/our-content/challenges/personal-effectiveness">Personal Effectiveness</a></li>
                                                                    <li><a href="/our-content/challenges/teaming-collaboration">Teaming & Collaboration</a></li>
                                                                    <li><a className="headlist" href="/our-content/modalities">Explore Modalities</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/resources" className="nav-link">Resources<i className='bx bx-chevron-down'></i></a>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a target="-blank" href="https://blanchardcommunity.com/">Blanchard Community</a>
                                                        <p>
                                                            Learn about the Blanchard Community and how to join.
                                                        </p>
                                                       
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="#">Resources <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/blog">Blogs</a></li>
                                                                    <li><a className="headlist" href="/resources/client-spotlights">Client Success Stories</a></li>
                                                                    <li><a className="headlist" href="/resources/newsletter">Newsletter</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/resources/research-insights">Research & Insights</a></li>
                                                                    <li><a className="headlist" href="/ebooks">eBooks</a></li>
                                                                    <li><a className="headlist" href="/podcast">Podcasts</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/events-workshops">Upcoming Workshops</a></li>
                                                                    <li><a className="headlist" href="/resources/videos">Videos</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/about-us">
                                                <a className="nav-link">About Us<i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="/about-us/our-commitments/blanchard-institute">The Blanchard Institute</a>
                                                        <p>
                                                            The Blanchard Institute is focused on leadership training for middle and high school age students to teach the mindset and skillset of a self leader.
                                                        </p>

                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="/about-us">About Us <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="/about-us/who-we-are">Who We Are</a></li>
                                                                    <li><a href="/about-us/who-we-are/leadership-team">Leadership Team</a></li>
                                                                    <li><a href="/about-us/who-we-are/innovation-lab">Innovation Lab</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="#">Our Commitments</a></li>
                                                                    <li><a href="#">Vision, Mission & Values</a></li>
                                                                    <li><a href="#">Blanchard Institute</a></li>
                                                                    <li><a href="#">Social Responsibility</a></li>
                                                                    <li><a href="#">Diversity, Equity, & Inclusion</a></li>
                                                                </ul>
                                                            </div> */}
                                                            {/* <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a className="headlist" href="#">Who We Partner With</a></li>
                                                                    <li><a href="#">Authorized Channel Partners</a></li>
                                                                    <li><a href="#">Content Experts</a></li>
                                                                    <li><a href="#">Technology Partners</a></li>
                                                                    <li><a className="headlist" href="#">Global Locations</a></li>
                                                                </ul>
                                                            </div> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="nav-btn">
                                        <Link href="/get-started"><a className="default-btn btn-bg1 border-radius-5">Build Your Journey</a></Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
