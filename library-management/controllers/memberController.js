const Book = require('../models/Book');
const Member = require('../models/Member');

exports.addMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.borrowBook = async (req, res) => {
  const { memberId, bookId } = req.body;
  try {
    const book = await Book.findById(bookId);
    const member = await Member.findById(memberId);

    if (!book || !member) throw new Error('Book or Member not found');
    if (book.status === 'borrowed') throw new Error('Book already borrowed');

    book.status = 'borrowed';
    book.borrowers.push(memberId);
    await book.save();

    member.borrowedBooks.push(bookId);
    await member.save();

    res.json({ message: 'Book borrowed successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.returnBook = async (req, res) => {
  const { memberId, bookId } = req.body;
  try {
    const book = await Book.findById(bookId);
    const member = await Member.findById(memberId);

    if (!book || !member) throw new Error('Book or Member not found');

    book.borrowers.pull(memberId);
    if (book.borrowers.length === 0) book.status = 'available';
    await book.save();

    member.borrowedBooks.pull(bookId);
    await member.save();

    res.json({ message: 'Book returned successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMemberBooks = async (req, res) => {
  try {
    const member = await Member.findById(req.params.memberId).populate('borrowedBooks');
    res.json(member);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
