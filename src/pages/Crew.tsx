import { useState } from 'react';
import Header from '../components/Header';
import '../styles/Crew.css';
import data from '../data.json';
import douglasPng from '../assets/crew/image-douglas-hurley.png';
import markPng from '../assets/crew/image-mark-shuttleworth.png';
import victorPng from '../assets/crew/image-victor-glover.png';
import anoushehPng from '../assets/crew/image-anousheh-ansari.png';

const imageMap = {
  'Douglas Hurley': douglasPng,
  'Mark Shuttleworth': markPng,
  'Victor Glover': victorPng,
  'Anousheh Ansari': anoushehPng,
};

function Crew() {
  const [activeCrew, setActiveCrew] = useState(data.crew[0]);

  return (
    <div className="crew">
      <Header />
      <main className="crew-main">
        <div className="crew-details">
          <h2 className="subheading" id='subhead'>
            <span>02</span> Meet your crew
          </h2>
          <h3 className="crew-role">{activeCrew.role}</h3>
          <h1 className="crew-name">{activeCrew.name}</h1>
          <p className="crew-bio">{activeCrew.bio}</p>
          <nav className="crew-nav">
            <ul>
              {data.crew.map((member) => (
                <li key={member.name}>
                  <div
                    className={`dot ${activeCrew.name === member.name ? 'active' : ''}`}
                    onClick={() => setActiveCrew(member)}
                    aria-label={`Select ${member.name}`}
                  ></div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="crew-image">
          <img
            src={imageMap[activeCrew.name as keyof typeof imageMap]}
            alt={activeCrew.name}
            className="member-image"
          />
        </div>
      </main>
    </div>
  );
}

export default Crew;