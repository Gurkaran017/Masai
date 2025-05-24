import React, { useState, useEffect, useCallback } from "react";

function SearchBar({ onDestinationChange }) {
  const [input, setInput] = useState("");

  // Debounce search input to avoid many API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      if (input.trim()) {
        // Call Nominatim or other geocode API here
        // e.g., fetchLocation(input).then(loc => onDestinationChange(loc));
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [input, onDestinationChange]);

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  return (
    <input
      type="text"
      value={input}
      placeholder="Enter destination"
      onChange={onChange}
      style={{ padding: 10, margin: 10, fontSize: 16, width: "100%" }}
    />
  );
}

export default React.memo(SearchBar);
