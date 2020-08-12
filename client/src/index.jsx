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
  }

  componentDidMount () {
    this.getAllRooms();
    this.setState({
      lists: [
        {
          listName: "Summer Trips",
          numberOfItems: 6
        },
        {
          listName: "Europe Trip",
          numberOfItems: 11
        },
        {
          listName: "Thanksgivings",
          numberOfItems: 2
        }
      ]
    })
  }

  getAllRooms () {
    axios.get('/room')
    .then((rooms) => {
      this.setState({
        rooms: rooms.data,
      })
    })
    .catch((err) => {
      console.log(err, `Client get all room err`)
    })
  }

  onClickList (roomName, listName) {
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
          <Display rooms={this.state.rooms} onClickList={this.onClickList} onClickCreate={this.onClickCreate} lists={this.state.lists}/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));