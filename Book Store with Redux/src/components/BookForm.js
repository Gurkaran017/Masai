import React, { useState } from 'react';
import { Box, Button, Input, Select, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';

const BookForm = () => {
  const [formData, setFormData] = useState({ title: "", author: "", genre: "" });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (formData.title && formData.author && formData.genre) {
      dispatch(addBook(formData));
      setFormData({ title: "", author: "", genre: "" });
    }
  };

  return (
    <Box mb={5}>
      <VStack spacing={2}>
        <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <Input placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
        <Select placeholder="Select Genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })}>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Sci-fi">Sci-fi</option>
        </Select>
        <Button colorScheme="teal" onClick={handleSubmit}>Add Book</Button>
      </VStack>
    </Box>
  );
};

export default BookForm;
