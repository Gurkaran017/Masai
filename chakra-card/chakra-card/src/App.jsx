// src/App.jsx
import { Box } from '@chakra-ui/react'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <Box bg="gray.50" minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <ProfileCard />
    </Box>
  );
}

export default App;
