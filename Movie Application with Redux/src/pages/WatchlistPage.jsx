import { useSelector, useDispatch } from 'react-redux';
import Watchlist from '../components/Watchlist';
import { removeFromWatchlist } from '../redux/watchlistReducer';

const WatchlistPage = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  const handleRemove = (id) => {
    dispatch(removeFromWatchlist(id));
  };

  return <Watchlist watchlist={watchlist} onRemove={handleRemove} />;
};

export default WatchlistPage;
