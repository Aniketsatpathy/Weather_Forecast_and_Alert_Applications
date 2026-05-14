"use client";

import {

  MapContainer,
  TileLayer,
  Marker,
  Popup

} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function WeatherMap() {

  return (

    <MapContainer
      center={[23.0225, 72.5714]}
      zoom={8}

      style={{
        height: "500px",
        width: "100%"
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[23.0225, 72.5714]}>

        <Popup>
          Ahmedabad Weather Location
        </Popup>

      </Marker>

    </MapContainer>

  );
}