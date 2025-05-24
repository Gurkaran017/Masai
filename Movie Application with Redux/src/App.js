import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import WatchlistPage from './pages/WatchlistPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
