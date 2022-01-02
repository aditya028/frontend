import React from 'react'
import "./css/services.css"
import img1 from "./images/image1.png"
import img2 from "./images/image2.png"
import img3 from "./images/image3.png"
import img4 from "./images/image4.png"
import img5 from "./images/image5.png"
import { Link } from "react-router-dom";
function Services() {
    return (
        <>
            {/* <div className="empty"></div> */}
            <section className='services'>


                <h1 className='servicesH1'>Our Services</h1>

                <div className="box-1">

                    <img className="img1" src={img1} alt="" />



                    <Link to="/services/pichdeck"><div className="card1">
                        <i className="fas fa-desktop icon1"></i> <h1>  Pitch Deck</h1>
                        <p>Well-Researched & Graphically Designed Pitch Deck that will Maximize Chances of Funding.
                            We are Experts In creating Professional Pitch Decks, Company Profiling and Financial Model. We are team of strategists, storytellers & visualizers who understands the business world. </p>
                        <Link to="/pichdeck">Know More </Link><i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                    </div></Link>


                </div>

               <div className="box-2">

               <Link to="/services/cofounders"><div className="card2">
                    <i className="fas fa-handshake icon2"></i><h1>Co-Founders Connect</h1>
                    <p>Enter the ecosystem and connect with like minded passionate people in the ecosystem.</p>
                    <Link to="/services/cofounders">Know More </Link><i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                </div></Link>


                <img className="img2" src={img2} alt="" />

               </div>



                <div className="box-3">

                    
                     <img className="img3" src={img3} alt="" />



                    <Link to="/services/techsupport"><div className="card3">
                        <i className="fas fa-user-tie icon3"></i><h1> Tech Support</h1>
                        <p>We are offering best in className technology services to design, build and market your business. We have the technology and expertise to develop solutions and can connect people and businesses.</p>
                        <Link to="/services/techsupport">Know More </Link><i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                    </div></Link>

                </div>



              <div className="box-4">

              <Link to="/services/legalsupport"> <div className="card4">
                    <i className="fas fa-file-contract icon4"></i> <h1>Legal Support</h1>
                    <p>Consult with our Experts for Company registrations, Corporate restructuring & Compliance. Get best support in E-filing, ITR, Capital gain</p>
                    <Link to="/services/legalsupport"> Know More </Link><i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                </div></Link>


                <img className="img4" src={img4} alt="" />


              </div>


                <div className="box-5">

                     <img className="img5" src={img5} alt="" />



                    <Link to="/services/mentorship"><div className="card5">
                        <i className="fas fa-chalkboard-teacher icon5"></i><h1> Mentorship</h1>
                        <p>Get a chance to talk with industry experts directly. Book your appointment now. Our Mentor
                            are Inspirational and Successful in their life ask him questions to have a doubt free online learning.  </p>
                        <Link to="/services/mentorship">Know More </Link><i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                    </div></Link>

                </div>

            </section>
            {/* <ContactUs /> */}
            {/* <Footer /> */}

        </>
    )
}

export default Services
