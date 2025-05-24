import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteBook, markAsRead } from '../redux/actions/bookActions';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} mb={2}>
      <Text fontWeight="bold">{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Genre: {book.genre}</Text>
      <Text>Status: {book.status}</Text>
      <Button size="sm" colorScheme="green" onClick={() => dispatch(markAsRead(book.id))} mt={2} mr={2}>Mark as Read</Button>
      <Button size="sm" colorScheme="red" onClick={() => dispatch(deleteBook(book.id))} mt={2}>Delete</Button>
    </Box>
  );
};

export default BookItem;
