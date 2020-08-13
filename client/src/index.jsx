import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Display from "./components/display.jsx";

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rooms: [],
      lists: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAllRooms = this.getAllRooms.bind(this);
    this.getAllLists = this.getAllLists.bind(this);
    this.onClickList = this.onClickList.bind(this);
    this.onClickUnlike = this.onClickUnlike.bind(this);
    this.onClickCreate = this.onClickCreate.bind(this);
  }

  componentDidMount () {
    this.getAllRooms();
    this.getAllLists()
  }

  getAllRooms () {
    axios.get('/room')
    .then((rooms) => {
      this.setState({
        rooms: rooms.data
      })
    })
    .catch((err) => {
      console.log(err, `Client get all room err`)
    })
  }

  getAllLists () {
    axios.get('/list')
    .then((lists) => {
      this.setState({
        lists: lists.data
      })
    })
    .catch((err) => {
      console.log(err, `Client get all list err`)
    })
  }

  onClickList (roomName, listName) {
    console.log(`will write a post request to /room to update the list`)
    console.log(`will write a post request to /list to update the number of items`)
    axios.post('/room', {'roomName': roomName, 'listName': listName})
    .then(() => {console.log(`Client like list post success`)})
    .catch()
    // .then(() => {
    //   axios.post('/list', {'roomName': roomName, 'listName': listName})
    //   .then(() => {console.log(`Client list update success`)})
    //   .catch()
    // })
  }

  onClickUnlike (roomName, listName) {
    console.log(`will write a post request to /room to update the list`)
    console.log(`will write a post request to /list to update the number of items`)
  }

  onClickCreate () {
    console.log(`will write a post request to /list to create a list`)
  }

  render() {
    return (
      <div>
        <div>
          <Display rooms={this.state.rooms} onClickList={this.onClickList} onClickUnlike={this.onClickUnlike} onClickCreate={this.onClickCreate} lists={this.state.lists}/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));