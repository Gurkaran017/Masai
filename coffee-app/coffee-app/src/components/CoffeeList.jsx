// src/components/CoffeeList.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffees } from '../redux/actions';
import { Box, Grid, Button, Heading, VStack } from '@chakra-ui/react';
import CoffeeCard from './CoffeeCard';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const { coffees, isLoading } = useSelector((state) => state);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(fetchCoffees(sortOrder));
  }, [dispatch, sortOrder]);

  return (
    <Box p={4}>
      <Heading mb={4}>Coffee Shop</Heading>
      <VStack mb={4} align="start">
        <Button onClick={() => setSortOrder("asc")}>Sort by Price: Low to High</Button>
        <Button onClick={() => setSortOrder("desc")}>Sort by Price: High to Low</Button>
      </VStack>
      {isLoading ? (
        <Heading>Loading...</Heading>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CoffeeList;
