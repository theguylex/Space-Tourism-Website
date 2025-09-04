import { useState } from 'react';
import Header from '../components/Header';
import '../styles/Technology.css';
import data from '../data.json';
import launchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import launchLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import capsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';

const portraitImageMap = {
  'Launch vehicle': launchPortrait,
  'Spaceport': spaceportPortrait,
  'Space capsule': capsulePortrait,
};

const landscapeImageMap = {
  'Launch vehicle': launchLandscape,
  'Spaceport': spaceportLandscape,
  'Space capsule': capsuleLandscape,
};

function Technology() {
  const [activeTech, setActiveTech] = useState(data.technology[0]);
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="technology">
      <Header />
      <main className="tech-main">
        <h2 className="subheading" id="techHead">
          <span>03</span> Space launch 101
        </h2>
        <div className="tech-body">
          <div className="tech-details">
            <div className="tech-content">
              <nav className="tech-nav">
                <ul>
                  {data.technology.map((tech, index) => (
                    <li key={tech.name}>
                      <div
                        className={`techTab ${activeTech.name === tech.name ? 'active' : ''}`}
                        onClick={() => setActiveTech(tech)}
                        aria-label={`Select ${tech.name}`}
                      >
                        {index + 1}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="tech-info">
                <h3 className="tech-term">The terminology...</h3>
                <h1 className="tech-name">{activeTech.name}</h1>
                <p className="tech-description">{activeTech.description}</p>
                
              </div>
            </div>
          </div>
          <div className="tech-image">
            <img
              src={isMobile ? landscapeImageMap[activeTech.name as keyof typeof landscapeImageMap] : portraitImageMap[activeTech.name as keyof typeof portraitImageMap]}
              alt={activeTech.name}
              className="tech-image-img"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Technology;