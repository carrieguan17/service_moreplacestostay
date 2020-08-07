// // This is to establish the databse
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/list', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
// const dblist = mongoose.connection;

// // Below is to verify whether it is connected to DB:
// dblist.on('error', console.error.bind(console, 'connection error:'));
// dblist.once('open', function() {
//   console.log(`Connected to List DB`)
// });

// // This is to define the list schema
// let listSchema = new mongoose.Schema({
//   listName: String,
//   numberOfItems: Number
// });

// module.exports = {
//   List: mongoose.model('List', listSchema),
//   dblist: dblist
// }