import { VStack, Text } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const Watchlist = ({ watchlist, onRemove }) => {
  return (
    <VStack spacing={4}>
      {watchlist.length === 0 ? (
        <Text>No movies in your watchlist.</Text>
      ) : (
        watchlist.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onAddToWatchlist={() => onRemove(movie.id)} />
        ))
      )}
    </VStack>
  );
};

export default Watchlist;
