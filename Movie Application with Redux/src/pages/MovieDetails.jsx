import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.movies.find(m => m.id.toString() === id));

  return movie ? (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">{movie.title}</Text>
      <Text>{movie.overview}</Text>
    </Box>
  ) : <Text>Loading...</Text>;
};

export default MovieDetails;
