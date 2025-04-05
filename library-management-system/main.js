let books = [];
let currentPage = 1;
let booksPerPage = parseInt(localStorage.getItem("booksPerPage")) || 5;
let sortBy = localStorage.getItem("sortBy") || "";
let filterGenre = localStorage.getItem("filterGenre") || "";
let filterAuthor = localStorage.getItem("filterAuthor") || "";

const getBooks = async () => {
  try {
    const res = await fetch(`${DATABASE_URL}/books.json`);
    const data = await res.json();
    books = Object.keys(data || {}).map(id => ({ id, ...data[id] }));
    applyFilters();
  } catch (err) {
    console.error("Error fetching books:", err);
  }
};

const renderBooks = (data) => {
  const container = document.getElementById("book-list");
  container.innerHTML = "";

  const start = (currentPage - 1) * booksPerPage;
  const end = start + booksPerPage;
  const paginatedBooks = data.slice(start, end);

  paginatedBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><b>Author:</b> ${book.author}</p>
      <p><b>Genre:</b> ${book.genre}</p>
      <p><b>Year:</b> ${book.publishedYear}</p>
      <p><b>Available:</b> ${book.available ? "Yes" : "No"}</p>
      <button onclick="deleteBook('${book.id}')">Delete</button>
    `;
    container.appendChild(card);
  });

  renderPagination(data.length);
};

const renderPagination = (totalItems) => {
  const totalPages = Math.ceil(totalItems / booksPerPage);
  const container = document.getElementById("book-pagination");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      applyFilters();
    };
    if (i === currentPage) btn.disabled = true;
    container.appendChild(btn);
  }
};

const applyFilters = () => {
  let filtered = [...books];

  if (filterGenre) {
    filtered = filtered.filter(book => book.genre.toLowerCase().includes(filterGenre.toLowerCase()));
  }
  if (filterAuthor) {
    filtered = filtered.filter(book => book.author.toLowerCase().includes(filterAuthor.toLowerCase()));
  }
  if (sortBy) {
    filtered.sort((a, b) => a[sortBy].toString().localeCompare(b[sortBy].toString()));
  }

  renderBooks(filtered);
};

const deleteBook = async (id) => {
  try {
    await fetch(`${DATABASE_URL}/books/${id}.json`, { method: "DELETE" });
    getBooks();
  } catch (err) {
    console.error("Error deleting book:", err);
  }
};

document.getElementById("book-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const genre = document.getElementById("book-genre").value;
  const year = parseInt(document.getElementById("book-year").value);
  const available = document.getElementById("book-available").value === "true";

  const newBook = { title, author, genre, publishedYear: year, available };

  try {
    await fetch(`${DATABASE_URL}/books.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook)
    });
    getBooks();
  } catch (err) {
    console.error("Error adding book:", err);
  }
});

document.getElementById("filter-genre").addEventListener("input", (e) => {
  filterGenre = e.target.value;
  localStorage.setItem("filterGenre", filterGenre);
  applyFilters();
});

document.getElementById("filter-author").addEventListener("input", (e) => {
  filterAuthor = e.target.value;
  localStorage.setItem("filterAuthor", filterAuthor);
  applyFilters();
});

document.getElementById("sort-books").addEventListener("change", (e) => {
  sortBy = e.target.value;
  localStorage.setItem("sortBy", sortBy);
  applyFilters();
});

document.getElementById("books-per-page").addEventListener("change", (e) => {
  booksPerPage = parseInt(e.target.value);
  localStorage.setItem("booksPerPage", booksPerPage);
  applyFilters();
});

// Initial load
getBooks();
