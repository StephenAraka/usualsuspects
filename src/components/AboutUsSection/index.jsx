import React from 'react';
import Header from '../Header';
import CountUp from 'react-countup';
import './AboutUsSection.css';
import { ReactComponent as Management } from '../../assets/images/talent-management.svg';
import { ReactComponent as Talent } from '../../assets/images/talent.svg';
import { ReactComponent as Production } from '../../assets/images/video-camera.svg';
import { ReactComponent as Relations } from '../../assets/images/public-relations.svg';
import { ReactComponent as Rolex } from '../../assets/images/wrap.svg';
import { ReactComponent as Trophy } from '../../assets/images/trophy.svg';
import { ReactComponent as Clock } from '../../assets/images/clock.svg';
import { ReactComponent as Support } from '../../assets/images/support.svg';

const AboutUsSection = () => {
  return (
    <div className="AboutUsContainer">
      <div className="AboutUsIntro">
        <div className="AboutUsIntroHeading">about us</div>
        <div className="AboutUsIntroDetails">
          <div>
            We are a passionate team of extraordinarily gifted misfits united by a singular vision. We believe we can actually  change the world. We can transform culture. We can re-brand good. We can speak truth to chaos. We can shape the conversation. One story at a time.
          </div>
          <div>
            We Are The Usual Suspects
          </div>
          <div>
            Welcome To Our Story
          </div>
        </div>
      </div>
      <div className="AboutUsMidDetails">
        <div className="AboutUsMidDetail">
          <div className="DetailIcon">
            <Management className="MidDetailIcon" />
          </div>
          <div className="DetailHeading">talent management</div>
          <div className="DetailDetails">
            Singer? Musician? Writer? Actor? Dancer? Speaker? We take care of your management needs so you can focus on doing what you do best.
            <br />
            We handle everything ranging from career mapping to brand management, media management, events, bookings and more.</div>
        </div>
        <div className="AboutUsMidDetail">
          <div className="DetailIcon"><Talent className="MidDetailIcon" /></div>
          <div className="DetailHeading">talent development</div>
          <div className="DetailDetails">
            We offer an array of both customized and group training, workshops, team building and mentor ship for creatives,artists and corporates seeking to grow their talent.
          </div>
        </div>
        <div className="AboutUsMidDetail">
          <div className="DetailIcon"><Production className="MidDetailIcon" /></div>
          <div className="DetailHeading">production</div>
          <div className="DetailDetails">
            We Produce content for shows, events, concerts, TV and Film, Radio and much more, From talent sourcing to stage design, venues and service providers to creating and running a creative, fresh and impactful program…we are your one stop shop.
          </div>
        </div>
        <div className="AboutUsMidDetail">
          <div className="DetailIcon"><Relations className="MidDetailIcon" /></div>
          <div className="DetailHeading">public relations</div>
          <div className="DetailDetails">
            Well thought out, creative, effective and out of the box PR solutions for your brand. Ranging from media management, crisis communications, publicity & marketing strategies and more.</div>
        </div>
      </div>
      <div className="AboutUsNumbers">
        <div className="AboutMetric">
          <div className="MetricIcon">
            <Rolex className="NumbersIcon" />
          </div>
          <div className="DescriptionSection">
            <div className="Number">
              <CountUp
                start={0}
                end={545}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="Label">
              rolexes consumed
          </div>
          </div>
        </div>
        <div className="AboutMetric">
          <div className="MetricIcon">
            <Trophy className="NumbersIcon" />
          </div>
          <div className="DescriptionSection">
            <div className="Number">
              <CountUp
                start={0}
                end={42}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="Label">
              finished projects
          </div>
          </div>
        </div>
        <div className="AboutMetric">
          <div className="MetricIcon">
            <Clock className="NumbersIcon" />
          </div>
          <div className="DescriptionSection">
            <div className="Number">
              <CountUp
                start={0}
                end={8760}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="Label">
              working hours
          </div>
          </div>
        </div>
        <div className="AboutMetric">
          <div className="MetricIcon">
            <Support className="NumbersIcon" />
          </div>
          <div className="DescriptionSection">
            <div className="Number">
              <CountUp
                start={0}
                end={28}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="Label">
              happy clients
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection;
