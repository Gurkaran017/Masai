import { Select, HStack } from "@chakra-ui/react";
import React from "react";

const Filters = ({ filter, onChange }) => {
  return (
    <HStack spacing={4} mb={4}>
      <Select placeholder="Filter by Match Result" value={filter} onChange={e => onChange(e.target.value)}>
        <option value="draw">Draw</option>
        <option value="win">Won Matches</option>
      </Select>
    </HStack>
  );
};

export default Filters;
