import React, { useState, Component } from 'react';
import { MapPinIcon, ChevronDownIcon, XIcon, SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});
function LocationMarker({ position, setPosition }: any) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    }
  });
  return position ? <Marker position={position} /> : null;
}
export function LocationWidget() {
  const [language, setLanguage] = useState('english');
  const [radius, setRadius] = useState(10);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [position, setPosition] = useState<[number, number]>([
  35.4676, -97.5164]
  );
  const [cityName, setCityName] = useState('Oklahoma City');
  const [locationSearch, setLocationSearch] = useState('');
  const languages = ['english', 'español', 'français', 'deutsch'];
  const handleLocationSearch = async () => {
    if (!locationSearch.trim()) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationSearch.trim())}&limit=1`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon, display_name } = data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
        setCityName(display_name.split(',')[0]);
        setLocationSearch('');
      }
    } catch (error) {
      console.error('Location search failed:', error);
    }
  };
  return (
    <>
      <div className="w-56 bg-[#e8e4df] border-l border-gray-300 p-6 flex flex-col gap-6">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLanguages(!showLanguages)}
            className="w-full flex items-center justify-between text-sm text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 bg-white rounded-md border border-gray-300">
            
            <span>{language}</span>
            <ChevronDownIcon size={16} />
          </button>

          <AnimatePresence>
            {showLanguages &&
            <motion.div
              initial={{
                opacity: 0,
                y: -10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.2
              }}
              className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden">
              
                {languages.map((lang) =>
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setShowLanguages(false);
                }}
                className="w-full text-left px-3 py-2 text-sm hover:bg-purple-50 transition-colors">
                
                    {lang}
                  </button>
              )}
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Location Trigger */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-sm font-medium text-gray-700">{cityName}</div>

          <button
            onClick={() => setShowMapModal(true)}
            className="w-20 h-20 rounded-full bg-purple-200 hover:bg-purple-300 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md">
            
            <MapPinIcon size={32} className="text-[#7b64b0]" />
          </button>

          <div className="text-xs text-gray-600">{radius} miles</div>
        </div>

        <div className="text-center text-sm italic text-gray-700">
          search by location
        </div>

        {/* Mini Location Search */}
        <div className="flex items-center gap-1.5 bg-white border border-gray-300 rounded-full px-3 py-1.5">
          <SearchIcon size={14} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleLocationSearch();
            }}
            placeholder="Enter city..."
            className="flex-1 outline-none bg-transparent text-xs text-gray-900 placeholder-gray-400 min-w-0" />
          
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {showMapModal &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowMapModal(false)}>
          
            <motion.div
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.9,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              duration: 0.5
            }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3
                className="text-2xl font-semibold text-[#7b64b0]"
                style={{
                  fontFamily: "'Playfair Display', serif"
                }}>
                
                  Select Location
                </h3>
                <button
                onClick={() => setShowMapModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors">
                
                  <XIcon size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="h-96 rounded-lg overflow-hidden border border-gray-300 mb-4">
                  <MapContainer
                  center={position}
                  zoom={11}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}>
                  
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                  
                    <LocationMarker
                    position={position}
                    setPosition={setPosition} />
                  
                  </MapContainer>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search Radius: {radius} miles
                    </label>
                    <input
                    type="range"
                    min="5"
                    max="50"
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-900" />
                  
                  </div>

                  <button
                  onClick={() => setShowMapModal(false)}
                  className="w-full bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium">
                  
                    Confirm Location
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}