import React from 'react'
import "./css/investorform.css"
function InvestorForm() {
    return (
        <>
            <section className="investorForm">
            <div className="v631_148">
      <div className="v457_62">
        <div className="v457_63"></div>
        <div className="v457_64"></div>
      </div>
      <span className="v457_65">Angel Investors</span
      ><span className="v457_66">To Look For Your Startup</span>
      <div className="v522_5"></div>
      <span className="v522_7">Register</span
      ><span className="v522_26">Connect with Cofounders</span>
      <div className="v522_8"></div>
      <span className="v522_13"
        >Complete your profile to sign up. Join the Angel Investing
        Network.</span
      ><span className="v522_27"
        >Manage and communicate with thousands of co-founders via your own
        profile.</span
      >
      <div className="v522_29"></div>
      <div className="name"></div>
    </div>

   <section className="angel">
   <div className="v631_149">
      <div className="v471_7"></div>
      <span className="v471_8">What is your Name?</span>
      <div className="v471_9"></div>
      <span className="v471_10">What is your Mobile Number?</span
      ><span className="v471_12">Industry you belong to?</span
      ><span className="v471_15">Number of investements already done</span
      ><span className="v471_18">Name Of The Last Company You Invested In</span
      ><span className="v471_20">Amount You Are Planning To Invest?</span
      ><span className="v471_23">Linkedin URL</span
      ><span className="v471_26">Tell us something about yourself</span>
      <div className="v457_101"></div>
      <div className="v471_13">
        <select className="industry" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
      </div>
      <div className="v471_16">
      <select className="number" name="money" id="cars">
          <strong>  <option value="volvo"></option></strong>
            <option value="saab">10-50</option>
            <option value="mercedes">50-100</option>
            <option value="audi">100+</option>

          </select>
      </div>
      <div className="v471_19"></div>
      <div className="v471_21">
        <select className="amount" name="money" id="cars">
         <option className='option' value="volvo" default>0-25 Lakhs </option>
            <option className='option' value="saab">25-50 Lakhs </option>
            <option className='option' value="mercedes">50-1 Cr</option>
            <option className='option' value="audi">1-5 Cr</option>
            <option className='option' value="audi">5+ Cr</option>
          </select>
      </div>
      </div>
      <div className="v471_24"></div>
      <div className="v471_27"></div>
      <span className="v457_102">What is your Email Address?</span>
      <div className="v471_22"></div>
      <div className="v471_28">
        <div className="v471_29"></div>
        <span className="v471_30">Submit</span>
      </div>
      <span className="v471_31">Angel Investor</span>
    
   </section>
            </section>
        </>
    )
}

export default InvestorForm;
