import { Link } from 'react-router-dom';
import { Box, Heading, VStack, Button } from '@chakra-ui/react';

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function Users() {
  return (
    <Box p={6}>
      <Heading mb={4}>Users Page</Heading>
      <VStack spacing={3} align="start">
        {users.map((user) => (
          <Button
            key={user.id}
            as={Link}
            to={`/users/${user.id}`}
            colorScheme="blue"
            variant="outline"
          >
            {user.name}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

export default Users;
