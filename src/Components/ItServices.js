import React from 'react'
import "./css/itservice.css"
import Header2 from "./Header2"
import web from "./images/web.png"
import mobile from "./images/mobile.png"
import graphic from "./images/graphic.png"
import digital from "./images/digital.png"
import loogod from "./images/logoosd.png"
import product from "./images/product.png"
import uiux from "./images/uiux.png"
import webLogo from "./images/webLogo.png"
import mobileLogo from "./images/mobileLogo.png"
import digitalLogo from "./images/digitalLogo.png"
import uxlLogo from "./images/uxLogo.png"
import productLogo from "./images/productLogo.png"
import logoDesign from "./images/logoDesignLogo.png"
import graphicLogo from "./images/graphicLogo.png"



function ItServices() {
    return (
        <>
       <section className="techsupport">
       <Header2 />
            <div className="empty"></div>
            <section className="itsolution">


                <h1 className="itsolutionH1">We Provide You With
                    IT Solution Services </h1>





                <div className="itsolutioncard1">
                <img className="webIcon" src={webLogo} alt="" /> <h1 className="card1H1"> Web Development</h1>
                    <p className="card1p1">We build sites that work for your business and your users — be it a complex eCommerce platform, a progressive web app, or a marketing site.</p>

                </div>
                <img className="itsolutionimg1" src={web} alt="" />

             <img className="itsolutionimg2"  src={mobile} alt="" />
            
                <div className="itsolutioncard2">
                   <img className="mobileIcon" src={mobileLogo} alt="" /> <h1 className="card2H1">Mobile Development</h1>
                    <p className="card2p1">We are a team of expert developers that build high quality native iOS and Android applications that run fast and look great on every device. We work with startups and entrepreneurs</p>

                </div>



                <div className="itsolutioncard3">
                  <img className="digitalIcon" src={digitalLogo} alt="" />  <h1 className="card3H1">Digit Marketing</h1>
                    <p className="card3p1">We live in a digital culture. And if you want to build a successful brand, you need a digital marketing strategy that helps spread everything from brand awareness to acquisition.</p>

                </div>

                <img className="itsolutionimg3" src={digital} alt="" />

                <img className="itsolutionimg4"  src={uiux} alt="" />

                <div className="itsolutioncard4">
                    <img className="uxIcon" src={uxlLogo} alt="" /><h1 className="card4H1">UI/UX Design</h1>
                    <p className="card4p1">Next, we develop your wireframe into an actual fully functioning responsive website, making sure to review the website on all pixel viewpoints to ensure full responsivity.</p>
                </div>



                <div className="itsolutioncard5">
                   <img className='graphicIcon' src={graphicLogo} alt="" /> <h1 className="card5H1">Graphic Design</h1>
                    <p className="card5p1">We provide graphic design and layout solutions for the print. We also offer consultative brand development and cross-media communications services; resulting in clear and lasting brands.</p>
                </div>


                <img className="itsolutionimg5"  src={graphic} alt="" />

 <img className="itsolutionimg6"  src={loogod} alt="" />





                <div className="itsolutioncard6">
                    <img className='logoIcon' src={logoDesign} alt="" /><h1 className="card6H1">Logo Design</h1>
                    <p className="card6p1">Our logo designers have made unique logos for small businesses as well as large enterprises worldwide. Our logo designs span multiple industries Get in touch with us for a detailed proposal .</p>
                </div>
                <img className="itsolutionimg7"  src={product} alt="" />

                <div className="itsolutioncard7">
                   <img className='productIcon' src={productLogo} alt="" /> <h1 className="card7H1">Product Design</h1>
                    <p className="card7p1">We use a carefully tuned design process to efficiently and cost effectively go from product idea to reality. We take your idea from a seed concept and nurture it into a fully developed product.</p>
                </div>



            </section>
       </section>
       {/* <Footer /> */}
        </>
    )
}

export default ItServices
