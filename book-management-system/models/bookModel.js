const fs = require('fs');
const path = './db.json';

// Read books from db.json
const getBooks = () => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

// Save books to db.json
const saveBooks = (books) => {
  fs.writeFileSync(path, JSON.stringify(books, null, 2), 'utf-8');
};

// Get a book by ID
const getBookById = (id) => {
  const books = getBooks();
  return books.find(book => book.id === id);
};

// Add a new book
const addBook = (book) => {
  const books = getBooks();
  books.push(book);
  saveBooks(books);
  return book;
};

// Update a book's details
const updateBook = (id, updatedDetails) => {
  const books = getBooks();
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...updatedDetails };
    saveBooks(books);
    return books[index];
  }

  return null;
};

// Delete a book
const deleteBook = (id) => {
  const books = getBooks();
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    saveBooks(books);
    return true;
  }

  return false;
};

// Borrow a book
const borrowBook = (id, readerName) => {
  const books = getBooks();
  const index = books.findIndex(book => book.id === id && book.status === 'available');

  if (index !== -1) {
    books[index].status = 'borrowed';
    books[index].borrowedBy = readerName;
    books[index].borrowedDate = new Date().toISOString();
    saveBooks(books);
    return books[index];
  }

  return null;
};

// Return a book
const returnBook = (id) => {
  const books = getBooks();
  const index = books.findIndex(book => book.id === id && book.status === 'borrowed');

  if (index !== -1) {
    books[index].status = 'available';
    books[index].borrowedBy = null;
    books[index].borrowedDate = null;
    saveBooks(books);
    return books[index];
  }

  return null;
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook
};
