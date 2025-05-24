import { Box, Input, Button } from '@chakra-ui/react';

const Signup = ({ onSignup }) => {
  return (
    <Box p={4} maxW="md" mx="auto">
      <Input placeholder="Name" mb={2} />
      <Input placeholder="Email" mb={2} />
      <Input placeholder="Password" type="password" mb={4} />
      <Button colorScheme="green" onClick={onSignup}>Signup</Button>
    </Box>
  );
};

export default Signup;
