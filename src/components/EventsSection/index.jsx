import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
  return (
    <div className="EventsContainer">
      <div className="EventsIntro">
        <div className="EventsIntroHeading">our events</div>
        <div className="EventsIntroDetails">
          <div>
            We pride ourselves is putting together world-class events that cater for the needs of our partners and surpass the expectations of the customer. Our versatility and experience allow us to do events ranging from small intimate gatherings for friends and family to complex stadium shows involving international artists and multi-disciplinary riders.
          </div>
        </div>
      </div>
      <div className="EventsMidDetails">
        <div className="EventsMidDetail">
          <div className="EventsDetailHeading">kwa mungu festival</div>
          <div className="DetailDetails">
            A 3 day gathering of people and institutions that exist to glorify the name of the risen Jesus. To equip, connect and celebrate with friends, families, churches, ministries, fellowships and companies.All things for him - All things in Him.
          </div>
        </div>
        <div className="EventsMidDetail">
          <div className="EventsDetailHeading">music shack</div>
          <div className="DetailDetails">
            A quarterly workshop for artistes, musicians, worship leaders and teams whose goal is to equip, train and inspire practitioners with Christ like values and professional skills for them to be effective and have a lasting and exponential influence on their spheres.
          </div>
        </div>
      </div>

      <div className="EventsMidDetails">
        <div className="EventsMidDetail">
          <div className="EventsDetailHeading">the full hundred</div>
          <div className="DetailDetails">
            The ultimate Men’s getaway to bond, learn, adventure and be stretched…body, mind and soul. Three days and two nights at a private 700-acre campsite for hiking, swimming, orienteering, challenge courses with the special forces, campfires, great food, 4x4 off-road challenges, health camps, Finance & wealth management workshops, Gadget Expos, Games, Networking and deep conversations on Manhood, Fatherhood and Brotherhood.
          </div>
        </div>
        <div className="EventsMidDetail">
          <div className="EventsDetailHeading">ignition</div>
          <div className="DetailDetails">
            An annual creatives camp/conference. Culmination for both the shack and the fringe fellowship. A 3-day residential retreat at Musana Camps with speaking sessions, breakout sessions, workshops, training opportunities, networking and practical jam/collaborative sessions.
          </div>
        </div>
      </div>
    </div >
  )
}

export default EventsSection;
