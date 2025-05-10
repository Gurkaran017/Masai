const Book = require('../models/bookModel');

// Add a new book
const addBook = (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const newBook = {
    id: Date.now(),
    title,
    author,
    genre,
    publishedYear,
    status: 'available'
  };
  
  const addedBook = Book.addBook(newBook);
  res.status(201).json(addedBook);
};

// Get all books
const getAllBooks = (req, res) => {
  const books = Book.getBooks();
  res.status(200).json(books);
};

// Update book details
const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publishedYear, status } = req.body;
  const updatedBook = Book.updateBook(Number(id), { title, author, genre, publishedYear, status });

  if (updatedBook) {
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Delete a book
const deleteBook = (req, res) => {
  const { id } = req.params;
  const isDeleted = Book.deleteBook(Number(id));

  if (isDeleted) {
    res.status(200).json({ message: "Book deleted" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook
};
