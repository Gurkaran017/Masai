import { Box, Image, Text, Button } from '@chakra-ui/react';

const MovieCard = ({ movie, onAddToWatchlist }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <Text fontWeight="bold" mt={2}>{movie.title}</Text>
      <Text fontSize="sm" color="gray.500">{movie.release_date}</Text>
      <Button colorScheme="blue" size="sm" mt={2} onClick={() => onAddToWatchlist(movie)}>
        Add to Watchlist
      </Button>
    </Box>
  );
};

export default MovieCard;
