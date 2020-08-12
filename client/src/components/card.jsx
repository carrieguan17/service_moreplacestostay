import React, { useState } from 'react';
import ListModal from './listmodal.jsx'

function LikeButton(props) {
  return(
    <button onClick={props.onClick}>Like</button>
  )
}

function UnlikeButton(props) {
  return (
    <button onClick={props.onClick}>Unlike</button>
  )
}

class Cards extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list: this.props.room.savedList
    };
    this.handleLikeButton = this.handleLikeButton.bind(this);
    this.handleUnlikeButton = this.handleUnlikeButton.bind(this)
  }

  handleLikeButton () {
    this.props.onClickLike(this.props.roomName);
  }

  handleUnlikeButton () {
    'todo'
  }

  render () {
    var list = this.state.list;
    let button;
    if (list === '') {
      button = <LikeButton onClick={this.handleLikeButton}/>
    } else {
      button = <UnlikeButton onClick={this.handleUnlikeButton}/>
    }
    return (
      <div>
      <div className="cards" style={styles.cards}>
        {button}
        {console.log(this.props.room)}
      </div>
    </div>
    )
  }

}

const styles = {
  cards: {
    width: "350px",
    height: "200px",
    backgroundColor: "blue",
    border: "2px solid black",
    boxSizing: "border-box",
    fontSize: "2.5em",
    color: "white"
  },

  openModal: {
    cursor: "pointer"
  }
}

export default Cards