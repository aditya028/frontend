import React, { useState } from 'react';
import "./css/contactus.css"
import axios from "axios"

function ContactUs() {
    const [formname, setFormName] = useState("");
    const [formemail, setFormEmail] = useState("");
    const [formnumber, setFormNumber] = useState("");
    const [formmessage, setFormMessage] = useState("");

    const formData = {
        name: formname,
        email: formemail,
        number: formnumber,
        message: formmessage
    }
    const submitForm = async () => {
        await axios.post("https://demo-111111.herokuapp.com/contact", formData)
        setFormName("");
        setFormEmail("");
        setFormNumber("");
        setFormMessage("");
    }
    return (
        <>
            <section className="contactUs">

                <div className="topSection">
                    <span className="v162_555">Have Any Questions ?</span><span className="v162_556">How you grow your business with us?
                        Get a Free Consultation today</span>
                </div>

                <div className="bottomSection">
                  

                    <div className="LContactBox">

                        <div className="v162_563">Get a Quote</div>

                       <div className="Cnumber">
                       <div className="v162_557"></div>
                        <span className="v162_560">+91 9152721137</span>
                       </div>

                       <div className="Cmail">
                       <div className="v162_559"></div>
                        <span className="v162_561">contact@venturelattice.com</span>
                       
                        </div>   
                          
                      <div className="Clocation">
                      <div className="v162_558"></div>
                            <span className="v162_562">Sadguru Drushti Residency,
                                Kalyan - Karjat Highway, Neral, Maharashtra 410101</span>
                                
                          </div>
                        

                    </div>

                    <div className="RContactBox">
                        <span className="v162_543">Full Name</span>
                        <span className="v162_544"></span>
                        <input type="text" className="v162_545" placeholder='John Dave' value={formname} onChange={(e) => { setFormName(e.target.value) }} />
            
                        <span className="v162_548">Email</span>
                        <span className="v162_547"></span>
                        <input type="email" className="v162_549" placeholder='JohnDave@gmail.com' value={formemail} onChange={(e) => { setFormEmail(e.target.value) }} />
                        
                
                        <span className="v162_565">Mobile Number</span>
                        <span className="v162_552"></span>
                        <input type="number"
                            className="v162_566" placeholder='0987654312' value={formnumber} onChange={(e) => { setFormNumber(e.target.value) }} />
                        
                        <span className="v162_551">Message</span>
                        <span className="v162_553"></span>
                        <input type="text" className="v162_554" placeholder='Please type your message here' value={formmessage} onChange={(e) => { setFormMessage(e.target.value) }} />
                        
                        <button className="v162_568" onClick={submitForm}>Send Message</button>
                    </div>

                </div>
                {/* <div className="v162_567">

                </div> */}
            </section>
        </>
    )
}

export default ContactUs;
