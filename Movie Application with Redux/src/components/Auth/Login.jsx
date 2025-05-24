import { Box, Input, Button } from '@chakra-ui/react';

const Login = ({ onLogin }) => {
  return (
    <Box p={4} maxW="md" mx="auto">
      <Input placeholder="Email" mb={2} />
      <Input placeholder="Password" type="password" mb={4} />
      <Button colorScheme="blue" onClick={onLogin}>Login</Button>
    </Box>
  );
};

export default Login;
