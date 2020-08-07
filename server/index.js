// import dependencies
var express = require('express');
var app = express();
var PORT = 3000;
var dbroom = require('../database/index_room.js');
// var dblist = require('../database/index_list.js')
const Room = require('../database/index_room.js');

// middleware
app.use(express.static('../client/dist'));
app.use(express.json())

// routes (will make a router to direct different routes)

// Below is a GET request to obatin all of the room info
app.get('/room', (req, res) => {
  Room.getAllRooms((err, result) => {
    if (err) {
      res.status(401)
      res.end()
      console.log(err, `Server get room err`)
    } else {
      res.status(201)
      res.send(result)
      res.end()
      console.log(`Server get room success`)
      console.log(result)
    }
  })
})

// start server
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})