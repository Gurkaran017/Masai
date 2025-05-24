import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, Circle } from "react-leaflet";

const Map = React.memo(({ currentLocation, destination, route, onGeofenceTriggered }) => {
 
  const polylinePositions = useMemo(() => {
    return route ? route.geometry.coordinates.map(([lat, lng]) => [lat, lng]) : [];
  }, [route]);

  // Example geofence circle (lat, lng, radius)
  const geofence = useMemo(() => ({
    center: [/* lat */, /* lng */],
    radius: 500, // meters
  }), []);


  return (
    <MapContainer
      center={currentLocation || [51.505, -0.09]}
      zoom={13}
      style={{ height: "80vh", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentLocation && <Marker position={currentLocation}><Popup>You are here</Popup></Marker>}
      {destination && <Marker position={destination}><Popup>Destination</Popup></Marker>}
      {polylinePositions.length > 0 && <Polyline positions={polylinePositions} color="blue" />}
      <Circle center={geofence.center} radius={geofence.radius} pathOptions={{ color: 'red' }} />
    </MapContainer>
  );
});

export default Map;
