import React from 'react';
import Header from '../Header';
import LandingSection from '../LandingSection';
import AboutUsSection from '../AboutUsSection';
import ArtistsSection from '../ArtistsSection';
import EventsSection from '../EventsSection';
import WorkSection from '../WorkSection';
import Footer from '../Footer';
import TeamsSection from '../TeamSection';
import ContactSection from '../ContactSection';
import './Landing.css';

const Landing = () => {
  return (
    <div className="HomePageContainer">
      <Header />
      <div id="home" className="LandingPageSection">
        <LandingSection />
      </div>
      <div id="about" className="AboutUsSection">
        <AboutUsSection />
      </div>
      <div id="team" className="TeamSection PageSection">
        <TeamsSection />
      </div>
      <div id="artists" className="ArtistsSection PageSection">
        <ArtistsSection />
      </div>
      <div id="events" className="EventsSection PageSection">
        <EventsSection />
      </div>
      <div id="work" className="WorkSection PageSection">
        <WorkSection />
      </div>
      <div id="contacts" className="ContactsSection PageSection">
        <ContactSection />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default Landing
