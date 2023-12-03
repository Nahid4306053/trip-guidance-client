import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function SimpleMap({area}) {
  const customMarkerIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],  
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });
  
  const markerPosition = [area.coordinates.latitude, area.coordinates.longitude]; 

  return (
   <div className=" border-4 border-blue-100">
     <MapContainer
      center={markerPosition}
      zoom={15}
      style={{ height: "400px", width: "100%" ,zIndex: 10}}
    >
      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       />
      <Marker position={markerPosition} icon={customMarkerIcon}>
        <Popup>
          {area.place}
        </Popup>
      </Marker>
    </MapContainer>
   </div>
  );
}
