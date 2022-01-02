import React from 'react'
import "./css/mentorship.css"
import { Link } from "react-router-dom"
import Item from "./Item"

import Carousel from 'react-elastic-carousel';

function Mentorship() {


return (
    <>
        <section className='mentorship'>
            <div className="v133_113">
                <div className="v133_114">
                    <div className="v133_115"></div>
                    <div className="v133_116"></div>
                </div>
                <div className="v152_85"></div>
                <span className="v155_142">Get Started Now</span>
                <span className="v155_143">Get Started
                    Now</span>
                <span className="v155_123"> A Mentor is someone who acts as an advisor to a less experienced
                    individual, known as their mentee. Typically, individuals seek mentors who work in their same or desired
                    field. The mentor helps this individual grow and develop as a professional, often offering advice based on
                    their more advanced knowledge or experience. Mentorship relationships can be built through networking,
                    personal connections or formal mentorship programs.</span>
                <span className="v155_124"> Mentorship can provide
                    numerous benefits for mentors and their mentees. Developing this relationship can help both of you learn new
                    things, build your networks and grow as professionals. Understanding these benefits can help you decide
                    whether to find a mentor or become one. </span>


                <span
                    className="v152_80">A Successful Mentor is one who is a near perfect role model</span>
                <span
                    className="v152_82">Mentorship</span>

                <span className="v155_122">Why Mentorship Is Important</span>
                <span
                    className="v155_126">Testimonials</span>
                <div className="v152_83"></div><span className="v152_84">Book a Meeting</span>
                <div className="v155_128">
                <Carousel itemsToShow={2}>
                {/* {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))} */}
          <Item>
          “My Mentor helped my self esteem by 
encouraging me to challenge my negative 
mind set, ‘No one will buy my services, I’m 
not good enough.” YBI ENTREPRENEUR
          </Item>
          <Item>
          “My Mentor helped my self esteem by 
encouraging me to challenge my negative 
mind set, ‘No one will buy my services, I’m 
not good enough.” YBI ENTREPRENEUR
          </Item>
          <Item>
          “My Mentor helped my self esteem by 
encouraging me to challenge my negative 
mind set, ‘No one will buy my services, I’m 
not good enough.” YBI ENTREPRENEUR
          </Item>
                </Carousel>
                </div>
               
                
                <div className="v155_129"></div>
                <div className="v155_132"></div>
                <div className="v155_134"></div>
                <div className="v155_137"></div>
                <div className="v155_138"></div>
                <div className="v155_139"></div>
                <div className="v155_140"></div>

                <Link to="/services/mentorship/booknow">

                    <span className="v155_141">Book Now</span>

                </Link>


            </div>
        </section>

    </>
)
}

export default Mentorship;
