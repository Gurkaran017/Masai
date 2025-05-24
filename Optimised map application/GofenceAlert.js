import React from "react";

function GeofenceAlert() {
  return (
    <div style={{ backgroundColor: "orange", padding: 10, textAlign: "center" }}>
      You have entered a geofenced area!
    </div>
  );
}

export default React.memo(GeofenceAlert);
