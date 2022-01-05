import React from "react";
import "./css/header.css";
import Services from "./Services";
import Advisers from "./Advisers";
// import Startup from './Startup';
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
      <section className="head">
        <div className="cont">
          <h1 className="contH1">
            A One Stop place for{" "}
            <strong>Individuals,Founders,Co-Founders </strong>to kick start
            their StartUp
          </h1>
          <button className="contBtn"> Get Started Now</button>
        </div>
      </section>
      <Services />

      <Advisers />
      {/* <Startup /> */}
    </>
  );
}

export default Home;
