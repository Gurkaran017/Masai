import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

const MatchCard = ({ match }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.id === match.id);

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" shadow="md">
      <Text fontWeight="bold">{match.team1} vs {match.team2}</Text>
      <Text>Date: {match.date}</Text>
      <Text>Venue: {match.venue}</Text>
      <Text>Winner: {match.winner}</Text>
      <Button
        mt={2}
        colorScheme={isFavorite ? 'red' : 'green'}
        onClick={() => dispatch(isFavorite ? removeFromFavorites(match.id) : addToFavorites(match))}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </Button>
    </Box>
  );
};

export default MatchCard;
