// src/Movies.jsx
import { useState, useEffect } from 'react';
import { firestore } from './firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesCollection = collection(firestore, 'movies');
      const movieSnapshot = await getDocs(moviesCollection);
      const movieList = movieSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMovies(movieList);
    };

    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    const movieRef = doc(firestore, 'movies', id);
    await deleteDoc(movieRef);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1>Movies</h1>
      <Link to="/add-movie">Add New Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>{movie.releaseYear}</p>
            <Link to={`/add-movie/${movie.id}`}>Edit</Link>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
