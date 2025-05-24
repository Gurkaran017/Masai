import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onAddToWatchlist }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onAddToWatchlist={onAddToWatchlist} />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
