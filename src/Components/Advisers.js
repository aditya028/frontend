import React from 'react'
import "./css/advisers.css"
import img6 from "./images/image6.png";
import img7 from "./images/image7.png"

function Advisers() {
  return (
    < >
   
   <section className="content-box">
     <div className="img-box">
     <img className="img6" src={img6} alt="about"/>
            <img className="img7" src={img7} alt="about"  />
     </div>
     <div className="text-box">
       <p>We have various industry <strong>Experts</strong> and <strong>Advisers</strong> with us helping startups achieve their journey of growth.</p>
       <button>
         Get Hired Now
       </button>
     </div>
   </section>
    </>
  )
}

export default Advisers;
