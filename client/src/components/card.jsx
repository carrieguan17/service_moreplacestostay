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
      list: ''
    };
    this.handleLikeButton = this.handleLikeButton.bind(this);
    this.handleUnlikeButton = this.handleUnlikeButton.bind(this)
  }

  handleLikeButton () {
    var roomName = this.props.room? this.props.room.roomName : ''
    var listName = this.props.room? this.props.room.savedList : ''
    this.props.onClickLike(roomName, listName);
  }

  handleUnlikeButton () {
    var roomName = this.props.room? this.props.room.roomName : ''
    var listName = this.props.room? this.props.room.savedList : ''
    this.props.onClickUnlike(roomName, listName)
  }

  render () {
    var list = this.props.room? this.props.room.savedList : '';
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
          <img  className="media-object" style={styles.mediaObject} src={this.props.room? this.props.room.imageUrl : null} alt="" />
          <div>Review to do</div>
          <div>
            <span className="words" style={styles.words}>{this.props.room? this.props.room.type : null}</span>
            <span>{this.props.room? this.props.room.numberOfBeds : null} beds</span>
          </div>
          <div className="words" style={styles.words}>{this.props.room? this.props.room.roomName : null}</div>
          <div>${this.props.room? this.props.room.roomPrice : null} / night</div>
        </div>
    </div>
    )
  }

}

const styles = {
  cards: {
    width: "350px",
    height: "800px",
    backgroundColor: "blue",
    border: "2px solid black",
    boxSizing: "border-box",
    fontSize: "2.5em",
    color: "white"
  },

  openModal: {
    cursor: "pointer"
  },

  mediaObject: {
    width: "140px",
    height: "80px",
    border: "2px solid black",
    boxSizing: "border-box",
  },

  words: {
    fondSize: "0.5em"
  }
}

export default Cards