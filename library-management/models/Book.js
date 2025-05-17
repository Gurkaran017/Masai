const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  author: { type: String, required: true },
  status: { type: String, enum: ['available', 'borrowed'], default: 'available' },
  borrowers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  createdAt: { type: Date, default: Date.now }
});

// Pre hook: check availability before borrowing
bookSchema.pre('save', function (next) {
  if (this.status === 'borrowed' && this.borrowers.length === 0) {
    return next(new Error('Book cannot be marked as borrowed with no borrowers.'));
  }
  next();
});

// Post hook: update status to available if all borrowers removed
bookSchema.post('save', function (doc) {
  if (doc.borrowers.length === 0 && doc.status === 'borrowed') {
    doc.status = 'available';
    doc.save();
  }
});

module.exports = mongoose.model('Book', bookSchema);
