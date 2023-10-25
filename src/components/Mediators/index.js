// React imports
import { useEffect, useState } from 'react';

// Third-party libraries and styles
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Local imports
import './index.scss';

const Mediators = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`container mediators-page ${isMobile ? 'mobile' : 'desktop'}`}>
      <MediatorText />
      <MediatorMap />
    </div>
  );
};

const MediatorText = () => (
  <div className="text-zone">
    <h1>Welcome to the Mediators Page!</h1>
    <p>
      Here you can find a list of conflict mediators who are available to assist housing cooperatives.
      Explore the list below to find a mediator who fits your needs, and feel free to reach out to them directly for assistance.
    </p>
    {/* Add your list of mediators here */}
  </div>
);

const MediatorMap = () => (
  <div className="map-wrap">
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A sample mediator location.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Mediators;
