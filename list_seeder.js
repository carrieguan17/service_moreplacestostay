var List = require('./database/index_list.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/list', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

var lists = [
  new List.List({
    listName: "Summer Trips",
    numberOfItems: 6
  }),
  new List.List({
    listName: "Europe Trip",
    numberOfItems: 11
  }),
  new List.List({
    listName: "Thanksgivings",
    numberOfItems: 2
  })
]

var counter = 0;
for (var i = 0; i < lists.length; i++) {
  lists[i].save((err, result) => {
    counter += 1;
    if (err) {
      console.log(`Error seeding list data`)
    } else if (counter === lists.length) {
      exit();
      console.log(`Seeding list data finished`)
    }
  });
}

function exit() {
  mongoose.disconnect();
}