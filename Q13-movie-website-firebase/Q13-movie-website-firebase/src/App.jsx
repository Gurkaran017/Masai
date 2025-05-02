// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import AddMovie from './AddMovie';
import Movies from './Movies';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
