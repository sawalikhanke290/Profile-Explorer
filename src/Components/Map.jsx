import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const Map = ({ location }) => {
  const mapCenter = {
    lat: location.lat,
    lng: location.lng
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAqDX-3A4VHUu2yOUCNdslaaYK76U88Flk">
      <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={15}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
