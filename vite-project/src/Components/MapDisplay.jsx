import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const MapDisplay = ({ geoData }) => {
    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON data={geoData} />
        </MapContainer>
    );
};

export default MapDisplay;