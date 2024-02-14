import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


import React, { useState } from 'react';
import {  Modal, ModalHeader, ModalBody,} from 'reactstrap';


export default function story(){

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    const storyOneSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/5/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.open("/edassets/pdf/ed-wiley-ebook-keepyourpeople-partner.pdf", "_blank")
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
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value +
            "&formname=" + event.target.formname.value )

    }












    return(
        <>
          <Head>
            <title>Success-Story - Everything DiSC</title>
            <meta name="description" content="Explore Our Library Crucial Conversations First Chapter Crucial Accountability First Chapter Influencer First Chapter The Power of Habit Book Online Management and Leadership Resources Measuring the Impact and ROI of Leadership Training 7 Ways Poor Leaders Are Costing Your Company Money 3 Fatal Mistakes Managers Make When Coaching Their Teams When It Comes to Customer… Continue reading Books"/> 
          </Head>
            
            <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Explore Our Library</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>                             
                            </div>
                        </div>
                        
                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst">
                                <img src='/edassets/img/SuccessStory/leadership.png' alt="books"/>
                               <h4 className='booktitlerow1'>Building a Legacy of Leadership</h4>
                               <h3 className='booktitlerow1'onClick={toggle} style={{cursor:'pointer'}}>Download</h3>
                            
                            </div>
                        </div>

                   


                    {/* modal  */}
                    
                <Modal className='modal-dialog-centered' isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Success Story</ModalHeader>
                    <ModalBody>

                    <div className="col-lg-12 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-left">                                
                                <h4 className="countertoph2 text-left font24">Download now</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={storyOneSubmit} >                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        {/* <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No. (Optional)" />
                                        </div>  */}
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization"  required />
                                        </div>    
                                         <div className="col-sm-6 mb-12" >
                                            <input type="text" name="Designation" placeholder="Designation"  required />
                                        </div>                                       
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="formname" value="How to Navigate The Great Resignation"/>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="Everything DiSC"/>
                                        </div>                                        
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Download"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                        </div>
                    </div>



                        
                  
                    </ModalBody>
                   
                </Modal>


                 
                 
                    


                    </div>
                </div>                
            </div>





           

            
        </>
    )
}