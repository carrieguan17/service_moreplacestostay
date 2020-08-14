import React, { useState } from 'react';
import ListModal from './listmodal.jsx';
import Carousel from './carousel.jsx';
import CreateListModal from './createlistmodal.jsx';
import SavedModal from './savedmodal.jsx';
import RemovedModal from './removedmodal.jsx'

function Display (props) {

  // Below are items for ListModal
  const [show, setShow] = useState(false);
  const [roomName, setRoomName] = useState('');
  const closeListModal = () => setShow(false);
  function onClickLike (roomName) {
    setShow(true);
    setRoomName(roomName);
  }

  // Below are items for SavedModal
  const [savedShow, setSavedShow] = useState(false);
  const [listName, setListName] = useState('');
  const closeSavedModal = () => setSavedShow(false);
  function showSavedModal (listName) {
    setSavedShow(true);
    setListName(listName);
    setTimeout(function(){ closeSavedModal() }, 5000)
  }

  // Below are items for RemovedModal
  const [removedShow, setRemovedShow] = useState(false);
  const closeRemovedModal = () => setRemovedShow(false);
  function onClickUnlikeRM (roomName, listName) {
    setRemovedShow(true);
    setListName(listName);
    setRoomName(roomName);
    setTimeout(function(){ closeRemovedModal() }, 5000)
  }

  // Below are items for CreateListModal
  const [createListShow, setCreateListShow] = useState(false);
  const closeCreateListModal = () => setCreateListShow(false);
  function onClickCreateAList () {
    setShow(false),
    setCreateListShow(true)
  }

  return (
    <div>
      <div>
        <ListModal lists={props.lists} show={show} roomName={roomName} closeListModal={closeListModal} onClickList={props.onClickList} showSavedModal={showSavedModal} onClickCreateAList={onClickCreateAList}/>
      </div>
      <div>
        <SavedModal savedShow={savedShow} listName={listName} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} roomName={roomName} closeSavedModal={closeSavedModal}/>
      </div>
      <div>
        <CreateListModal createListShow={createListShow} closeCreateListModal={closeCreateListModal} onClickCreate={props.onClickCreate} onClickList={props.onClickList} roomName={roomName}/>
      </div>
      <div>
        <RemovedModal removedShow={removedShow} listName={listName} roomName={roomName} onClickList={props.onClickList} showSavedModal={showSavedModal}/>
      </div>
      <div>
        <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={props.onClickUnlike} onClickUnlikeRM={onClickUnlikeRM}/>
      </div>
    </div>
  )
}

export default Display;