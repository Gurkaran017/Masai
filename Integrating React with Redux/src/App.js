import React, { useState } from 'react';
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';
import TodoItem from './components/TodoItem';

const App = () => {
  const [title, setTitle] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === '') return;
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <Box maxW="500px" mx="auto" mt={10} p={5}>
      <Heading mb={4} textAlign="center">Redux Todo App</Heading>
      <VStack spacing={3}>
        <Input
          placeholder="Enter todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button colorScheme="teal" width="full" onClick={handleAdd}>
          Add Todo
        </Button>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onDelete={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default App;
