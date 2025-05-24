import { Box, Heading } from '@chakra-ui/react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filter from './components/Filter';

function App() {
  return (
    <Box maxW="600px" mx="auto" mt={10} p={5}>
      <Heading textAlign="center" mb={6}>Redux Book Library</Heading>
      <BookForm />
      <Filter />
      <BookList />
    </Box>
  );
}

export default App;
