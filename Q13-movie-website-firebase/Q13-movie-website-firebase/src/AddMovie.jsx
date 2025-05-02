// src/AddMovie.jsx
import { useState, useEffect } from 'react';
import { firestore } from './firebase-config';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchMovie = async () => {
        const movieRef = doc(firestore, 'movies', id);
        const docSnap = await getDoc(movieRef);
        if (docSnap.exists()) {
          const movieData = docSnap.data();
          setTitle(movieData.title);
          setDescription(movieData.description);
          setReleaseYear(movieData.releaseYear);
        }
      };
      fetchMovie();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      title,
      description,
      releaseYear,
    };

    if (id) {
      const movieRef = doc(firestore, 'movies', id);
      await updateDoc(movieRef, movieData);
    } else {
      await addDoc(collection(firestore, 'movies'), movieData);
    }

    navigate('/movies');
  };

  return (
    <div>
      <h1>{id ? 'Edit Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Release Year</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
