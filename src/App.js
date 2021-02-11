import { useState } from 'react';

import UnfoldedMap from './components/UnfoldedMap';

import './App.css';

function App() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  return (
    <div className="App">
      <UnfoldedMap setMap={setMap} setIsMapLoaded={setIsMapLoaded} />
    </div>
  );
}

export default App;
