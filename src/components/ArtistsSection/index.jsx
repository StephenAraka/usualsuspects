import React from 'react';
import './ArtistsSection.css';
import myko from '../../assets/images/myko-ouma.jpg';
import sam from '../../assets/images/sam-kimera.jpg';
import djTwonjex from '../../assets/images/dj-twonjex.jpg';

const ArtistsSection = () => {
  return (
    <div className="ArtistsContainer">
      <div className="ArtistsIntro">
        <div className="ArtistsIntroHeading">our artists</div>
        <div className="ArtistsIntroDetails">
          <div>
            Whereas we work with an extensive array of amazing artists across the continent on various projects – we also have our ‘personal people’. Artists signed to and managed exclusively by The Usual Suspects Ltd in a 360 management deal.
          </div>
        </div>
      </div>
      <div className="ArtistsMidDetails">
        <div className="ArtistsMidDetail">
        <div className="ArtistPhoto"><img src={myko} alt="myko_ouma" /></div>
          <div className="ArtistsDetailHeading">Myko Ouma</div>
          <div className="DetailDetails">
            A renown figure in jazz and contemporary world music from Uganda and first ever signing to the Usual Suspects family.
          <br />
          Proficient on a variety of distinctive traditional instruments. Myko’s musical vision is to integrate Ugandan folk music and jazz. As a guitarist, he has developed a unique playing style informed by the traditional rhythms and melodies of Uganda roots music. He is also an active producer both in studio and of live band concerts and shows.
          </div>
        </div>
        <div className="ArtistsMidDetail">
        <div className="ArtistPhoto"><img src={sam} alt="sam_kimera" /></div>
          <div className="ArtistsDetailHeading">Sam K!mera</div>
          <div className="DetailDetails">
            A gifted story teller with a honey dripped voice that effortlessly lends itself to a variety of genres from RnB to reggae to Afro-pop and country. K!mera shows a deep appreciation for word and stories and their power of imagery. His depth of content takes center-stage and everything grows from there. Staying true to his chosen approach;(true to content – but dress it up nice), this multi-genre artiste knows how to do just that. With catchy melodies, lyrical hooks and the honest voice of the long lost friend you never met. “He’ll have you humming that tune long after the song ends.” His debut album ‘Puzzle’ is available online and in selected stores.
          </div>
        </div>
        <div className="ArtistsMidDetail">
          <div className="ArtistPhoto"><img src={djTwonjex} alt="dj_twonjex" /></div>
          <div className="ArtistsDetailHeading">Dj Twonjex</div>
          <div className="DetailDetails">
            Fondly nicknamed “Jajja De-Game” he is known as the very first ever gospel Dj in Uganda. He went on to mentor a new breed and generation of gospel Djs making it a central part of the industry landscape. He continues trail blazing and pushing the boundaries of what a Dj can do with live band sets, Tv shows, radio shows and custom mixes available online.
        </div>
        </div>
      </div>
    </div >
  )
}

export default ArtistsSection;
