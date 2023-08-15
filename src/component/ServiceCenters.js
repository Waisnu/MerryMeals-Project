import { useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import LoadingSpinner from "./Loading";

const ServiceCenters = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyACyihDcSOlh4FUFdFDUAjpSWTsrJLzeXc",
  });

  const containerStyle = {
    width: "800px",
    height: "800px",
  };

  const center = {
    lat: 10.3389,
    lng: 123.91171
  };

  const mapRef = useRef(null);

  const handleMapLoad = (map) => {
    mapRef.current = map;
    addMarkers();
  };

  const addMarkers = () => {
    props.serviceCenters.forEach((serviceCenter) => {
      new window.google.maps.Marker({
        position: {
          lat: parseFloat(serviceCenter.scLatitude),
          lng: parseFloat(serviceCenter.scLongitude),
        },
        map: mapRef.current,
        title: serviceCenter.scName,
      });
    });
  };

  if (!isLoaded || !props.serviceCenters)
    return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container text-center">
        <h1 className="pt-5">Service Center Locations</h1>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={handleMapLoad}
        ></GoogleMap>
      </div>
    </div>
  );
};

export default ServiceCenters;
