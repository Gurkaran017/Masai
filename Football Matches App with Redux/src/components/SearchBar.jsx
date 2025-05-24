import { Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search by team, venue or date..."
      value={value}
      onChange={e => onChange(e.target.value)}
      mb={4}
    />
  );
};

export default SearchBar;
