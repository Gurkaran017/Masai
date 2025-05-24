import { Box, Input, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/bookActions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box mb={5}>
      <Input placeholder="Filter by author" onChange={(e) => dispatch(setFilter('author', e.target.value))} mb={2} />
      <Select placeholder="Filter by genre" onChange={(e) => dispatch(setFilter('genre', e.target.value))} mb={2}>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Sci-fi">Sci-fi</option>
      </Select>
      <Select placeholder="Filter by status" onChange={(e) => dispatch(setFilter('status', e.target.value))}>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </Select>
    </Box>
  );
};

export default Filter;
