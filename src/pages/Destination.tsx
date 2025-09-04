import { useState } from 'react';
import Header from '../components/Header';
import '../styles/Destination.css';
import data from '../data.json';
import moonPng from '../assets/destination/image-moon.png';
import marsPng from '../assets/destination/image-mars.png';
import europaPng from '../assets/destination/image-europa.png';
import titanPng from '../assets/destination/image-titan.png';

const imageMap = {
  Moon: moonPng,
  Mars: marsPng,
  Europa: europaPng,
  Titan: titanPng,
};

function Destination() {
  const [activeDestination, setActiveDestination] = useState(data.destinations[0]);

  return (
    <div className="destination">
      <Header />
      <main className="destination-main">
        <div className="destination-image">
          <h2 className="subheading" id='destHead'>
            <span>01</span> Pick your destination
          </h2>
          <img
            src={imageMap[activeDestination.name as keyof typeof imageMap]}
            alt={activeDestination.name}
            className="planet-image"
          />
        </div>
        <div className="destination-details">
          <nav className="destination-tabs">
            <ul>
              {data.destinations.map((dest) => (
                <li key={dest.name}>
                  <div
                    className={`tab ${activeDestination.name === dest.name ? 'active' : ''}`}
                    onClick={() => setActiveDestination(dest)}
                  >
                    {dest.name}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <h1 className="destination-name">{activeDestination.name}</h1>
          <p className="destination-description">{activeDestination.description}</p>
          <div className="destination-meta">
            <div className="meta-item">
              <h3 className="meta-label">Avg. distance</h3>
              <p className="meta-value">{activeDestination.distance}</p>
            </div>
            <div className="meta-item">
              <h3 className="meta-label">Est. travel time</h3>
              <p className="meta-value">{activeDestination.travel}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;