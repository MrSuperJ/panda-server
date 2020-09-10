const { DB_URL } = require('./index');
const mongoose = require('mongoose');

// 连接
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 监听连接状态
const db = mongoose.connection;

db.on('open', function () {
  console.log('mongoose open success');
});
db.on('error', (err) => {
  console.log('mongoose error:', err);
});
db.on('disconnected', () => {
  console.log('mongoose disconnected');
});

module.exports = mongoose;
