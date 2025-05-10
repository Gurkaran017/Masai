const returnCheckMiddleware = (req, res, next) => {
  const { id } = req.params;
  const book = require('../models/bookModel').getBookById(Number(id));

  if (book && book.status === 'borrowed') {
    const borrowedDate = new Date(book.borrowedDate);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - borrowedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 3) {
      return res.status(400).json({ error: "Book cannot be returned within 3 days of borrowing." });
    }
  }

  next();
};

module.exports = returnCheckMiddleware;
