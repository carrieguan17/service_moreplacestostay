import React from 'react';
import Cards from './Card.jsx'

class Carousel extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      currentSet: 0
    }

    this.handleForward = this.handleForward.bind(this)
    this.handleBackward = this.handleBackward.bind(this)

  }

  // Below is a function for forward button
  handleForward () {
    if (this.state.currentSet < 2) {
      let newcurrentSet = this.state.currentSet + 1;
      this.setState({
        currentSet: newcurrentSet
      }, () => {
        this.cardContainer.style.transitionDuration = "0.5s";
        this.cardContainer.style.transform = `translate(-${1400 * this.state.currentSet}px)`
      })
    } else if (this.state.currentSet === 2) {
      this.cardContainer.style.transitionDuration = "0.5s";
      this.cardContainer.style.transform = `translate(0px)`;
      let newcurrentSet = 0;
      this.setState({
        currentSet: newcurrentSet
      })
    }
  }

  // Below is a function for backward button
  handleBackward () {
    if (this.state.currentSet > 0) {
      let newcurrentSet = this.state.currentSet - 1;
      this.setState({
        currentSet: newcurrentSet
      }, () => {
        this.cardContainer.style.transitionDuration = "0.5s";
        this.cardContainer.style.transform = `translate(-${1400 * this.state.currentSet}px)`
      })
    } else if (this.state.currentSet === 0) {
      this.cardContainer.style.transitionDuration = "0.5s";
      this.cardContainer.style.transform = `translate(-2800px)`;
      let newcurrentSet = 2;
      this.setState({
        currentSet: newcurrentSet
      })
    }
  }

  render() {
    return(
      <div>
        <div className="viewPort" style={styles.viewPort}>
          <button onClick={this.handleBackward}>Backward</button>
          <button onClick={this.handleForward}>Forward</button>
          <div ref={refId => this.cardContainer = refId} className="cardContainer" style={styles.cardContainer}>
            <Cards room={this.props.rooms[0]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[1]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[2]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[3]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[4]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[5]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[6]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[7]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[8]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[9]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[10]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms[11]} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
          </div>
        </div>
      </div>
    )
  }

}

const styles = {
  viewPort: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1400px",
    height: "350px",
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content"
  }
}

export default Carousel;