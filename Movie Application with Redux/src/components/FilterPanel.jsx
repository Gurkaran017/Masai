import { Select, HStack } from '@chakra-ui/react';

const FilterPanel = ({ filter, setFilter }) => {
  return (
    <HStack spacing={4} mb={4}>
      <Select placeholder="Genre" onChange={(e) => setFilter({ ...filter, genre: e.target.value })}>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
      </Select>
      <Select placeholder="Year" onChange={(e) => setFilter({ ...filter, year: e.target.value })}>
        {[...Array(25)].map((_, i) => {
          const year = 2024 - i;
          return <option key={year} value={year}>{year}</option>;
        })}
      </Select>
    </HStack>
  );
};

export default FilterPanel;
