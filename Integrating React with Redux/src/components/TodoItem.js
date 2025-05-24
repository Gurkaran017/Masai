import { Box, Checkbox, IconButton, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} borderWidth={1} borderRadius="md" my={1}>
      <Checkbox isChecked={todo.status} onChange={() => onToggle(todo.id)}>
        <Text as={todo.status ? 'del' : 'span'}>{todo.title}</Text>
      </Checkbox>
      <IconButton icon={<DeleteIcon />} colorScheme="red" size="sm" onClick={() => onDelete(todo.id)} />
    </Box>
  );
};

export default TodoItem;
