import { Box, Button, Select, Text } from '@chakra-ui/react';

const BookingForm = ({ movie, onBook }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontWeight="bold">Book: {movie.title}</Text>
      <Select placeholder="Select a time">
        <option value="6pm">6:00 PM</option>
        <option value="9pm">9:00 PM</option>
      </Select>
      <Button mt={4} colorScheme="green" onClick={() => onBook(movie)}>Book Now</Button>
    </Box>
  );
};

export default BookingForm;
