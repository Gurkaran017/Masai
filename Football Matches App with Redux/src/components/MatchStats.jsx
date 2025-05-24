import { Box, Text } from "@chakra-ui/react";
import React from "react";

const MatchStats = ({ match }) => {
  // Example stat keys - API doesn't provide real stats, so placeholders
  return (
    <Box mt={2} p={3} borderTop="1px" borderColor="gray.200">
      <Text>Goals Scored: {match.team1goals || 0} - {match.team2goals || 0}</Text>
      <Text>Possession: 50% - 50%</Text>
      <Text>Yellow Cards: 2 - 1</Text>
      <Text>Red Cards: 0 - 1</Text>
    </Box>
  );
};

export default MatchStats;
