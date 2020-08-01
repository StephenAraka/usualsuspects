import React, { useState } from 'react';
import './TeamSection.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import enock from '../../assets/images/enock.jpg';
import joanita from '../../assets/images/joanita.jpg';
import benjamin from '../../assets/images/benjamin.jpg';
import olivia from '../../assets/images/olivia.jpg';
import patrick from '../../assets/images/patrick.jpg';

const items = [
  {
    src: enock,
    altText: 'IKIRIZA KIREMIRE ENOCK'
  },
  {
    src: benjamin,
    altText: 'BENJAMIN'
  },
  {
    src: olivia,
    altText: 'OLIVIA'
  },
  {
    src: joanita,
    altText: 'JOANITA'
  },
  {
    src: patrick,
    altText: 'PATRICK'
  }
];

const TeamsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="TeamCarousel"
      >
        <img className="w-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="TeamsContainer">
      <div className="TeamsIntro">
        <div className="TeamsIntroHeading">meet the team</div>
        <div className="TeamsIntroDetails">
          <div>
            Remember when we talked about a passionate team of extraordinarily gifted misfits...?
          </div>
        </div>
      </div>
      <div className="TeamsMidDetails">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
    </div >
  )
}

export default TeamsSection;
