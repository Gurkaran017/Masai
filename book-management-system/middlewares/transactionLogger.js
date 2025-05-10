const fs = require('fs');
const path = './transaction-log.txt';

const logTransaction = (action, book, readerName) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${readerName} ${action} "${book.title}"\n`;
  
  fs.appendFileSync(path, logMessage);
};

module.exports = logTransaction;
