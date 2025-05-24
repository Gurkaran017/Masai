import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector(state => state.books);
  const filters = useSelector(state => state.filters);

  const filteredBooks = books.filter(book => {
    return (
      (!filters.author || book.author.includes(filters.author)) &&
      (!filters.genre || book.genre === filters.genre) &&
      (!filters.status || book.status === filters.status)
    );
  });

  return (
    <>
      {filteredBooks.map(book => <BookItem key={book.id} book={book} />)}
    </>
  );
};

export default BookList;
