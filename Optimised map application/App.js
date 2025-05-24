import React, { useState, useEffect, useCallback, useMemo } from "react";
import Map from "./Map";
import SearchBar from "./SearchBar";
import GeofenceAlert from "./GeofenceAlert";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [route, setRoute] = useState(null);
  const [geofenceTriggered, setGeofenceTriggered] = useState(false);

  // Get user location on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setCurrentLocation([pos.coords.latitude, pos.coords.longitude]),
      () => alert("Geolocation permission denied")
    );
  }, []);

  // Callback to update destination from search bar
  const handleDestinationChange = useCallback((location) => {
    setDestination(location);
  }, []);

  // Effect to fetch route whenever currentLocation or destination changes
  useEffect(() => {
    if (!currentLocation || !destination) return;

    async function fetchRoute() {
      // Call your routing API here with currentLocation & destination
      // Example: const routeData = await getRoute(currentLocation, destination);
      // setRoute(routeData);
    }
    fetchRoute();
  }, [currentLocation, destination]);

  // Geofencing check — memoized to avoid expensive calculations
  const checkGeofence = useCallback(() => {
    // Your geofencing logic here, e.g., check distance from some geofence centers
    // If inside geofence, call setGeofenceTriggered(true)
  }, [currentLocation]);

  // Call geofence check on location change
  useEffect(() => {
    if (currentLocation) checkGeofence();
  }, [currentLocation, checkGeofence]);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <SearchBar onDestinationChange={handleDestinationChange} />
      <Map
        currentLocation={currentLocation}
        destination={destination}
        route={route}
        onGeofenceTriggered={setGeofenceTriggered}
      />
      {geofenceTriggered && <GeofenceAlert />}
    </div>
  );
}

export default App;
