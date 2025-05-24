import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches, toggleFavorite } from "./redux/actions";
import {
  Box, ChakraProvider, Container, Heading, Spinner, Text
} from "@chakra-ui/react";
import MatchCard from "./components/MatchCard";
import MatchStats from "./components/MatchStats";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";

function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches } = useSelector(state => state.matches);
  const { favorites } = useSelector(state => state.favorites);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const handleToggleFavorite = (match) => {
    dispatch(toggleFavorite(match));
  };

  const filteredMatches = footballMatches.filter(match => {
    const keyword = searchTerm.toLowerCase();
    const matchesSearch =
      match.team1.toLowerCase().includes(keyword) ||
      match.team2.toLowerCase().includes(keyword) ||
      match.venue.toLowerCase().includes(keyword) ||
      match.date.toLowerCase().includes(keyword);

    const matchesFilter =
      filter === "draw"
        ? match.matchWinner === ""
        : filter === "win"
        ? match.matchWinner !== ""
        : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <ChakraProvider>
      <Container maxW="container.md" py={5}>
        <Heading mb={5} textAlign="center">Football Match Tracker</Heading>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Filters filter={filter} onChange={setFilter} />

        {isLoading ? (
          <Spinner size="xl" />
        ) : isError ? (
          <Text color="red.500">Failed to load matches.</Text>
        ) : (
          filteredMatches.map(match => (
            <Box key={match.id} mb={4}>
              <MatchCard
                match={match}
                onToggleFavorite={() => handleToggleFavorite(match)}
                isFavorite={favorites.some(fav => fav.id === match.id)}
              />
              <MatchStats match={match} />
            </Box>
          ))
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
