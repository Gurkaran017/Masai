const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

// Read books from db.json
const getBooks = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

// Write books to db.json
const saveBooks = (books) => {
  fs.writeFileSync("db.json", JSON.stringify(books, null, 2), "utf-8");
};

// POST /books → Add new book
app.post("/books", (req, res) => {
  const books = getBooks();
  const newBook = req.body;
  if (!newBook.id || !newBook.title || !newBook.author || !newBook.year) {
    return res.status(400).json({ message: "All fields are required." });
  }
  books.push(newBook);
  saveBooks(books);
  res.status(201).json(newBook);
});

// GET /books → Retrieve all books
app.get("/books", (req, res) => {
  const books = getBooks();
  res.status(200).json(books);
});

// GET /books/:id → Retrieve book by ID
app.get("/books/:id", (req, res) => {
  const books = getBooks();
  const book = books.find((b) => b.id == req.params.id);
  if (book) res.status(200).json(book);
  else res.status(404).json({ message: "Book not found." });
});

// PUT /books/:id → Update book by ID
app.put("/books/:id", (req, res) => {
  const books = getBooks();
  const index = books.findIndex((b) => b.id == req.params.id);
  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    saveBooks(books);
    res.status(200).json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found." });
  }
});

// DELETE /books/:id → Delete book by ID
app.delete("/books/:id", (req, res) => {
  let books = getBooks();
  const newBooks = books.filter((b) => b.id != req.params.id);
  if (newBooks.length === books.length) {
    return res.status(404).json({ message: "Book not found." });
  }
  saveBooks(newBooks);
  res.status(200).json({ message: "Book deleted." });
});

// GET /books/search?author=<author_name> → Search books by author name
app.get("/books/search", (req, res) => {
  const { author, title } = req.query;
  if (!author && !title) return res.status(400).json({ message: "Author or Title query is required." });

  const books = getBooks();
  const filtered = books.filter((b) =>
    (author && b.author.toLowerCase().includes(author.toLowerCase())) ||
    (title && b.title.toLowerCase().includes(title.toLowerCase()))
  );

  if (filtered.length) res.status(200).json(filtered);
  else res.status(404).json({ message: "No books found" });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
