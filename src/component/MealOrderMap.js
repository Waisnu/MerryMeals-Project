import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import LoadingSpinner from "./Loading";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MealOrderMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeP41nTw8QroOfvcCFR9bKIC-GUW7BLcs",
  });

  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching current location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={15}
        options={options}
      >
        {/* Render your markers, info windows, or other map elements here */}
        <Marker position={currentLocation} />
      </GoogleMap>
    </div>
  );
};

export default MealOrderMap;
