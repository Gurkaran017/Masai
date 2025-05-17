const Order = require('./models/Order');

const getShippedOrders = () => Order.find({ order_status: "shipped" });

const updateOrderAmount = () => Order.updateOne(
  { order_id: 1 },
  { $set: { total_amount: 70000 } }
);

const deleteOrder = () => Order.deleteOne({ order_id: 4 });


const getOrderByCustomerName = () => Order.find({ customer_name: "Alice Johnson" });


const updateOrderStatus = () => Order.updateOne(
  { order_id: 2 },
  { $set: { order_status: "delivered" } }
);

const getHighValueOrders = () => Order.find({ total_amount: { $gte: 15000 } });

module.exports = {
  getShippedOrders,
  updateOrderAmount,
  deleteOrder,
  getOrderByCustomerName,
  updateOrderStatus,
  getHighValueOrders,
};
