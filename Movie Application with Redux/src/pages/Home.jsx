import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesReducer';
import MovieList from '../components/MovieList';

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <MovieList movies={movies} onAddToWatchlist={() => {}} />;
};

export default Home;
