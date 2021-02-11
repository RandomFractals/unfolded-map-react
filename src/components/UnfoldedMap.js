import { useEffect, useState, useRef } from 'react';
import {createMap, setViewState} from '@unfolded/map-sdk';

function UnfoldedMap({setMap, setIsMapLoaded}) {
  // create a map
  const mapRef = useRef(null);
  useEffect(() => {
    const map = createMap({
      mapUrl: 'https://studio.unfolded.ai/public/80c800cc-5805-4416-94a5-bd8105cab7f7',
      appendToDocument: false,
      embed: true,
      width: window.innerWidth,
      height: window.innerHeight,
      onLoad: () => {
        console.log('%cUnfoldedMapSDK: %cMap has loaded...', 'color: violet;', 'color: yellow;');
        setMap(map);
        setIsMapLoaded(true);
      }
    });

    // add map iframe for display
    mapRef.current.appendChild(map.iframe);

    // resize map on window resize
    const resizeMap = () => {
      if (mapRef.current === null) return;
      const iframe = mapRef.current.querySelector('iframe');
      if (iframe === null) return;
      iframe.style.width = `${window.innerWidth}px`;
      iframe.style.height = `${window.innerHeight}px`;
    };
    window.addEventListener('resize', resizeMap);
  
  }, [setMap, setIsMapLoaded]);

  return (
    <div className="unfolded">
      <div ref={mapRef} />
    </div>
  );
}

export default UnfoldedMap;
