import React, { useState, useEffect } from "react";
import "./styles.css"; // Import styles

function App() {
  const [joke, setJoke] = useState(null);

  // Fetch a random joke when the component mounts
  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(data);
    };

    fetchJoke();
  }, []); // Empty dependency array to run only on mount

  const getAnotherJoke = () => {
    // Fetch a new joke on button click
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  };

  return (
    <div className="container">
      <h1>Random Joke</h1>
      {joke ? (
        <div className="card">
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
      <button className="button" onClick={getAnotherJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
