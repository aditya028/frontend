import React from "react";
import NavBar from "./NavBar";
import Services from "./Services";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ItServices from "./ItServices";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import LegalSupport from "./LegalSupport";
import Mentorship from "./Mentorship";
import PitchHeader from "./PitchHeader";
import AboutUs from "./AboutUs";
import CoFounder from "./CoFounder";
import BookNow from "./BookNow";
import PrivacyPolicy from "./PrivacyPolicy";
import StartupForm from "./StartupForm";
import BookNowForm from "./BookNowForm";

function Website() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route exact path="/services/pichdeck" element={<PitchHeader />} />
        <Route exact path="/services/techsupport" element={<ItServices />} />
        <Route exact path="/services/legalsupport" element={<LegalSupport />} />
        <Route exact path="/services/mentorship" element={<Mentorship />} />
        <Route exact path="/services/cofounders" element={<CoFounder />} />
        <Route
          exact
          path="/services/mentorship/booknow"
          element={<BookNow />}
        />
      </Routes>
      {/* <InvestorForm /> */}
      {/* <StartupForm /> */}
      {/* <BookNowForm /> */}
      <ContactUs />
      <Footer />
    </>
  );
}

export default Website;
