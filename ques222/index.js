const mongoose = require('mongoose');
const operations = require('./operations');

const DB_URI = 'mongodb://127.0.0.1:27017/orderDB';

mongoose.connect(DB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    
    console.log('\n1. Shipped Orders:');
    console.log(await operations.getShippedOrders());

    console.log('\n2. Update Total Amount of Order ID 1:');
    console.log(await operations.updateOrderAmount());

    console.log('\n3. Delete Order ID 4:');
    console.log(await operations.deleteOrder());

    console.log('\n4. Get Order by Alice Johnson:');
    console.log(await operations.getOrderByCustomerName());

    console.log('\n5. Update Order Status of Order ID 2:');
    console.log(await operations.updateOrderStatus());

    console.log('\n6. Orders with Total Amount >= 15000:');
    console.log(await operations.getHighValueOrders());

    mongoose.disconnect();
  })
  .catch((err) => console.error('MongoDB connection error:', err));
