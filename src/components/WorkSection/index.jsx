import React, { useState, useEffect } from 'react';
import './WorkSection.css';
import guns from '../../assets/images/27guns.jpg';
import guns2 from '../../assets/images/27guns2.jpg';
import guns3 from '../../assets/images/27guns3.jpg';
import guns4 from '../../assets/images/27guns4.jpg';
import bornfree from '../../assets/images/bornfree.JPG';
import bornfree2 from '../../assets/images/bornfree2.JPG';
import bornfree3 from '../../assets/images/bornfree3.JPG';
import bornfree4 from '../../assets/images/bornfree4.JPG';
import bornfree5 from '../../assets/images/bornfree5.JPG';
import reporter2 from '../../assets/images/reporter2.jpg';
import reporter3 from '../../assets/images/reporter3.jpg';
import reporter4 from '../../assets/images/reporter4.jpg';
import reporter1 from '../../assets/images/reporter1.jpg';
import kimeralistening from '../../assets/images/kimeralistening.jpg';
import kimeralistening2 from '../../assets/images/kimeralistening2.jpg';
import kimeralistening3 from '../../assets/images/kimeralistening3.jpg';
import kimeralistening4 from '../../assets/images/kimeralistening4.jpg';
import kimeralistening5 from '../../assets/images/kimeralistening5.jpg';
import kimeralistening6 from '../../assets/images/kimeralistening6.jpg';
import musicShack from '../../assets/images/music-shack.jpg';
import musicShack2 from '../../assets/images/music-shack2.jpg';
import musicShack3 from '../../assets/images/music-shack3.jpg';
import musicShack4 from '../../assets/images/music-shack4.jpg';

const WorkSection = () => {
  const images = [
    {
      src: guns,
      altText: '27_guns',
      tag: ['all', 'film']
    },
    {
      src: guns2,
      altText: '27_guns',
      tag: ['all', 'film']
    },
    {
      src: guns3,
      altText: '27_guns',
      tag: ['all', 'film']
    },
    {
      src: guns4,
      altText: '27_guns',
      tag: ['all', 'film']
    },
    {
      src: bornfree,
      altText: 'bornfree',
      tag: ['all', 'concert']
    },
    {
      src: bornfree2,
      altText: 'bornfree',
      tag: ['all', 'concert']
    },
    {
      src: bornfree3,
      altText: 'bornfree',
      tag: ['all', 'concert']
    },
    {
      src: bornfree4,
      altText: 'bornfree',
      tag: ['all', 'concert']
    },
    {
      src: bornfree5,
      altText: 'bornfree',
      tag: ['all', 'concert']
    },
    {
      src: reporter1,
      altText: 'bornfree',
      tag: ['all', 'film']
    },
    {
      src: reporter2,
      altText: 'bornfree',
      tag: ['all', 'film']
    },
    {
      src: reporter3,
      altText: 'bornfree',
      tag: ['all', 'film']
    },
    {
      src: reporter4,
      altText: 'bornfree',
      tag: ['all', 'film']
    },
    {
      src: kimeralistening,
      altText: 'kimeralistening',
      tag: ['all', 'event']
    },
    {
      src: kimeralistening2,
      altText: 'kimeralistening',
      tag: ['all', 'event']
    },
    {
      src: kimeralistening3,
      altText: 'kimeralistening',
      tag: ['all', 'event']
    },
    {
      src: kimeralistening4,
      altText: 'kimeralistening',
      tag: ['all', 'event']
    },
    {
      src: kimeralistening5,
      altText: 'kimeralistening',
      tag: ['all', 'event']
    },
    {
      src: kimeralistening6,
      altText: 'kimeralistening',
      tag: ['all', 'event']
    },
    {
      src: musicShack,
      altText: 'music_shack',
      tag: ['all', 'event']
    },
    {
      src: musicShack2,
      altText: 'music_shack',
      tag: ['all', 'event']
    },
    {
      src: musicShack3,
      altText: 'music_shack',
      tag: ['all', 'event']
    },
    {
      src: musicShack4,
      altText: 'music_shack',
      tag: ['all', 'event']
    }
  ];


  const [tag, setTag] = useState('all');

  const updateTag = (tag) => setTag(tag);

  return (
    <div className="WorkContainer">
      <div className="WorkIntro">
        <div className="WorkIntroHeading">our Work</div>
        <div className="WorkIntroDetails">
          <div>
            We believe every project is unique. Every client is different. And we want to believe in the heart and soul of the project so that after all is said and done... you are just as proud of the end result as we are. We walk the journey with you. We like to think of ourselves as the midwives to your baby.
          </div>
        </div>
      </div>
      <div className="FilterButtons">
        <div onClick={() => updateTag('all')} role="presentation" className="GalleryButton" >all</div>
        <div onClick={() => updateTag('concert')} role="presentation" className="GalleryButton" >concerts</div>
        <div onClick={() => updateTag('event')} role="presentation" className="GalleryButton" >events</div>
        <div onClick={() => updateTag('film')} role="presentation" className="GalleryButton" >films</div>
      </div>
      <div className="WorkGallery">
        {
          images.map((imageObject) => {
            if (imageObject.tag.includes(tag)) {
              return (
                <div key={images.indexOf(imageObject)} className="GalleryImage">
                  <img src={imageObject.src} alt={imageObject.altText} />
                </div>
              );
            }
          })
        }
      </div>
    </div >
  )
}

export default WorkSection;
