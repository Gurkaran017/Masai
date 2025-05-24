import { Input, Box } from '@chakra-ui/react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <Box mb={4}>
      <Input
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
    </Box>
  );
};

export default SearchBar;
