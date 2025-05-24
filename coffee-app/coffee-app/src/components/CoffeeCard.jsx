// src/components/CoffeeCard.jsx
import { Box, Image, Text } from '@chakra-ui/react';

const CoffeeCard = ({ coffee }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} shadow="md">
    <Image src={coffee.image} alt={coffee.title} boxSize="200px" objectFit="cover" mx="auto" />
    <Text mt={2} fontWeight="bold">{coffee.title}</Text>
    <Text>Price: ₹{coffee.price}</Text>
  </Box>
);

export default CoffeeCard;
