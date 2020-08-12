import React from "react";

function ListItem (props) {
  var handleSubmit = function (event) {
    event.preventDefault();
    props.onClickList(props.roomName, props.list.listName);
    props.closeListModal();
    props.showSavedModal(props.list.listName)
  }

  return (
    <div>
      <div>Any time</div>
      <div onClick={handleSubmit}>
        {props.list.listName}
      </div>
      <div>
        {props.list.numberOfItems}
      </div>
    </div>
  )
}

export default ListItem