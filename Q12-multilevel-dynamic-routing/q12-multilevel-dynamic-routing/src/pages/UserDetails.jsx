import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

function UserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  return (
    <Box p={6}>
      {user ? (
        <>
          <Heading>User Details</Heading>
          <Text fontSize="xl">Name: {user.name}</Text>
          <Text fontSize="md">Email: {user.email}</Text>
        </>
      ) : (
        <Heading color="red.400">User not found</Heading>
      )}
    </Box>
  );
}

export default UserDetails;
