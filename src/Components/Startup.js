import React from 'react'
import "./css/startup.css"
import img8 from "./images/image8.png"
import img9 from "./images/image9.png"
function Startup() {
    return (
        <section className="startup">
            <div className="containers">
                <div className="left-box">
                    <img className="img8" src={img8} alt="" />
                    <h1 className="h1">StartUp</h1>
                    <p>If you have the belief to be the change maker, let us <strong> know more about you</strong></p>
                </div>
                <div className="right-box">
                    <img className="img9" src={img9} alt="" />
                    <h1 >Angel Investor</h1>
                    <p>If you're looking to <strong>
                        invest in potential startups</strong>, we are happy to connect you with them, let us know about you</p>
                </div>
            </div>
            </section>
            )
}

            export default Startup;
