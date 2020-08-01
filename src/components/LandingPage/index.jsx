import React from 'react';
import Header from '../Header';
import LandingSection from '../LandingSection';
import AboutUsSection from '../AboutUsSection';

const Landing = () => {
  return (
    <div className="HomePageContainer">
      <Header />
      <div className="LandingPageSection">
        <LandingSection />
      </div>
      <div className="AboutUsSection">
      <AboutUsSection />
      </div>
    </div>
  )
}

export default Landing
