import React, { useState } from 'react';
import ListModal from './listmodal.jsx'
import Carousel from './carousel.jsx';
import CreateListModal from './createlistmodal.jsx';
import SavedModal from './savedmodal.jsx'

function Display (props) {

  // Below are items for ListModal
  const [show, setShow] = useState(false);
  const [roomName, setName] = useState('');
  const closeListModal = () => setShow(false);
  function onClickLike (name) {
    setShow(true);
    setName(name);
  }
  function onClickUnlike (listName) {
    // todo
  }

  // Below are items for SavedModal
  const [savedShow, setSavedShow] = useState(false);
  const [listName, setListName] = useState('');
  const closeSavedModal = () => setSavedShow(false);
  function showSavedModal (listName) {
    setSavedShow(true);
    setListName(listName)
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
      <Carousel rooms={props.rooms} onClickLike={onClickLike} onClickUnlike={onClickUnlike}/>
      <ListModal lists={props.lists} show={show} roomName={roomName} closeListModal={closeListModal} onClickList={props.onClickList} showSavedModal={showSavedModal} onClickCreateAList={onClickCreateAList}/>
      <SavedModal savedShow={savedShow} listName={listName} onClickLike={onClickLike} roomName={roomName} closeSavedModal={closeSavedModal}/>
      <CreateListModal createListShow={createListShow} closeCreateListModal={closeCreateListModal} onClickCreate={props.onClickCreate} onClickList={props.onClickList} roomName={roomName}/>
    </div>
  )
}

export default Display;