import Head from 'next/head'

export default function Workshops() {
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/17/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.Designation.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.leadsquared_mx_Showed_Interest_in.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.QuestionsComments.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

    }

    return (
        <>
            <Head>
                <title>Workshops - BYLD Group</title>
                <meta name="description" content="April 29th, 2022Trapologist at WorkTM Workshop Virtual Public Workshop: April 29th, 2022 Learn More & Register April 26th – 29th, 2022DISC Train-the-Trainer (TTT) Virtual Public Workshop: April 26th – 29th, 2022 Learn More & Register May 9th – 12th, 2022Blanchard India Online Workshop Virtual Public Workshop: May 9th – 12th, 2022 Reserve Your Seat May… Continue reading Workshops" />
            </Head>

            <section className='ptt-20 pbb-20'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">Workshops - BYLD Group</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='clearfix'></div>



                       

                    

                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - July 26th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Team Leadership - Virtual</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - July 27th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - August 7th to 8th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>The SLII Experience™ - Virtual</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - August 9th to 10th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>The SLII Experience™ - T4T</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>August 17th - 18th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DISC Train-the-Trainer (TTT)</h3>
                                    <a target="_blank" className="eventbtn" href='/everythingdisc/everything-disc-ttt-vt-lp/'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - August 23rd, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Conversational Capacity - Virtual</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>




                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop -  August 24th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - September 13th - 14th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - September 28th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - October 5th - 6th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - November 15th - 16th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - November 29th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - December 14th - 15th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - January 11th, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - January 30th - 31st, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - February 28th - 29th, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - March 14th, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div id="Register" className="rs-testimonial style4 tirianformbg ptt-50 pbb-70">
                <div className="container">
                    <div className="row">
                        <div className="clearfix"></div>

                        <div className='col-sm-2'></div>
                        <div className="col-sm-8">
                            <div className="bannerform tirianformshd">
                                <form id="contact-form" className='clientcornner ptt-5 pbb-20' onSubmit={registerUser}>
                                    <div className="row">
                                        <div className='col-sm-12'>
                                            <div className="sec-title3 mbb-35 text-center">
                                                <h4 className="countertoph2 text-center font30">Register Now</h4>
                                                <div className="heading-border-line center-style"></div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="leadsquared_mx_Showed_Interest_in" required>
                                                <option value="">Pick up any Slot*</option>                                                
                                                {/* <option value="Team Leadership - Virtual July 26th, 2023">Team Leadership - Virtual July 26th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Getting Things Done - July 27th, 2023">Crucial Life Changing Skills, Getting Things Done - July 27th, 2023</option> */}
                                                <option value="The SLII Experience™, Virtual - August 7th to 8th, 2023">The SLII Experience™, Virtual - August 7th to 8th, 2023</option>
                                                <option value="The SLII Experience™, T4T - August 9th to 10th, 2023">The SLII Experience™, T4T - August 9th to 10th, 2023</option>
                                                <option value="August 17th - 18th, 2023 - DISC Train-the-Trainer (TTT)">August 17th - 18th, 2023 - DISC Train-the-Trainer (TTT)</option>
                                                <option value="Conversational Capacity - Virtual - August 23rd, 2023">Conversational Capacity - Virtual - August 23rd, 2023</option>
                                                <option value="Crucial Life Changing Skills, The Power of Habit - August 24th, 2023">Crucial Life Changing Skills, The Power of Habit - August 24th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - September 13th - 14th, 2023">Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - September 13th - 14th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Getting Things Done - September 28th, 2023">Crucial Life Changing Skills, Getting Things Done - September 28th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Crucial Conversations for Accountability - October 5th - 6th, 2023">Crucial Life Changing Skills, Crucial Conversations for Accountability - October 5th - 6th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Influencer - November 15th - 16th, 2023">Crucial Life Changing Skills, Influencer - November 15th - 16th, 2023</option>
                                                <option value="Crucial Life Changing Skills, The Power of Habit - November 29th, 2023">Crucial Life Changing Skills, The Power of Habit - November 29th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - December 14th - 15th, 2023">Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - December 14th - 15th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Getting Things Done - January 11th, 2024">Crucial Life Changing Skills, Getting Things Done - January 11th, 2024</option>
                                                <option value="Crucial Life Changing Skills, Crucial Conversations for Accountability - January 30th - 31st, 2024">Crucial Life Changing Skills, Crucial Conversations for Accountability - January 30th - 31st, 2024</option>
                                                <option value="Crucial Life Changing Skills, Influencer - February 28th - 29th, 2024">Crucial Life Changing Skills, Influencer - February 28th - 29th, 2024</option>
                                                <option value="Crucial Life Changing Skills, The Power of Habit - March 14th, 2024">Crucial Life Changing Skills, The Power of Habit - March 14th, 2024</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By*</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 mb-12 d-none">
                                            <select name="leadsquared_mx_Business_Entity" required>
                                                <option value="BYLD Group">BYLD Group</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Get in Touch" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='col-sm-2'></div>

                    </div>
                </div>
            </div>
        </>
    )
}