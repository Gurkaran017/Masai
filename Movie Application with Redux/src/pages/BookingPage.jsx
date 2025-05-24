import { useSelector } from 'react-redux';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const selectedMovie = useSelector((state) => state.booking.selectedMovie);

  return selectedMovie ? (
    <BookingForm movie={selectedMovie} onBook={() => {}} />
  ) : null;
};

export default BookingPage;
