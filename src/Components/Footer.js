import React, { useState } from 'react'
import "./css/footer.css"
import { Link } from "react-router-dom"
import axios from "axios";
function Footer() {
    const [newsemail, setNewsEmail] = useState("")

    const newsemails = {
        emails: newsemail
    }
    const submitNewsEmail = async () => {
        const value = await axios.post("https://demo-111111.herokuapp.com/email", newsemails)
        console.log(value);
        setNewsEmail("");
    }
    return (
        <>

            <section className='footer'>

                <div className="footerLBox">
                   <div className="LBoX">
                        <div className="v125_77"></div>

                        <Link to="/aboutus">
                            <span className="v125_78">About Us</span>
                        </Link>

                        <Link to="/privacypolicy">
                            <span className="v125_84">Privacy Policy</span>
                        </Link>

                     <div className="socialMedia">
                     <span className="v125_93"></span>
                        <span className="v125_94"></span>
                        <span className="v125_95"></span>
                        <span className="v125_96"></span>
                        <span className="v125_97"></span>

                     </div>

        
                        <div className="v125_99">VentureLattice &nbsp;&nbsp; &nbsp;  2021</div>
                        <span className="v125_100"></span>
                       
                   </div>
                   
                   <div className="RBoX">

                        <Link to="/services"> 
                            <span className="v125_87">Services</span>
                        </Link>

                        <Link to="/services/pichdeck">
                            <span className="v125_79">Pitch Deck</span>
                        </Link>

                        <Link to="/services/techsupport">
                            <span className="v125_80">Tech Support</span>
                        </Link>

                        <Link to="/services/cofounders">
                            <span className="v125_81">Co-Founders Connect</span>
                        </Link>

                        <Link to="/services/legalsupport">
                             <span className="v125_85">Legal Support</span>
                        </Link>

                        <Link to="/services/mentorship">
                            <span className="v125_86">Mentorship</span>
                        </Link>
                   </div>
                   


                 
                </div>
                <div className="footerRBox">

                    <div className="v125_82">
                        <div
                            className="v125_88">NewsLetter</div>

                        <input type="email" value={newsemail} className="v125_92" placeholder="ENTER YOUR EMAIL" onChange={(e) => { setNewsEmail(e.target.value) }} />

                        <button className="v125_90" onClick={submitNewsEmail}>SIGN UP</button>

                        <div className="v125_89">Sign up to receive exclusive
                            updates and get access to our
                            events.</div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default Footer;
