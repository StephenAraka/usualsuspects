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
      <div id="team" className="TeamSection">
        <TeamsSection />
      </div>
      <div id="artists" className="ArtistsSection">
        <ArtistsSection />
      </div>
      <div id="events" className="EventsSection">
        <EventsSection />
      </div>
      <div id="work" className="WorkSection">
        <WorkSection />
      </div>
      <div id="contacts" className="ContactsSection">
        <ContactSection />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default Landing
