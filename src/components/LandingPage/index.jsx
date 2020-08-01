import React from 'react';
import Header from '../Header';
import LandingSection from '../LandingSection';
import AboutUsSection from '../AboutUsSection';
import ArtistsSection from '../ArtistsSection';
import EventsSection from '../EventsSection';
import WorkSection from '../WorkSection';

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
      <div className="ArtistsSection">
      <ArtistsSection />
      </div>
      <div className="EventsSection">
      <EventsSection />
      </div>
      <div className="EventsSection">
      <WorkSection />
      </div>
    </div>
  )
}

export default Landing
