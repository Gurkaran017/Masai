const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: Number,
  customer_name: String,
  items: [String],
  total_amount: Number,
  order_status: String,
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
