const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
function connect(callback) {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    connectTimeoutMS: 3000000,
  });
  mongoose.connection.on('error', (error) => console.error(error));
  mongoose.connection.once('open', () => console.log('Connected to database'));
  callback();
}

module.exports = connect;
