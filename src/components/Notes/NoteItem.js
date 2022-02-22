import Card from "../UI/Card";

import PinIcon from "../../assets/pin-icon.svg";

import classes from "./NoteItem.module.css";
import { useContext, useState } from "react";
import NotesContext from "../Contexts/notes-context";
import EditNote from "./EditNote";
import NoteOps from "./NoteOps";

const NoteItem = ({ id, noteContent }) => {
  const noteCtx = useContext(NotesContext);
  const [isEditing, setIsEditing] = useState(false);

  var titleAvailable = false;
  if (noteContent.title !== "") {
    titleAvailable = true;
  }
  const deleteClickHandler = () => {
    noteCtx.removeItem(id);
  };

  const pinClickHandler = () => {
    if (noteCtx.pinnedItems.some((i) => i.id === noteContent.id)) {
      noteCtx.unPinItem(id);
    } else {
      changeTypeHandler("normal");
      noteCtx.pinItem(noteContent);
    }
  };
  const closeHandler = () => {
    setIsEditing(false);
  };

  const openHandler = () => {
    setIsEditing(true);
  };

  const updateNotesColor = (color) => {
    console.log(color);
    const note = {
      id: id,
      title: noteContent.title,
      text: noteContent.text,
      color: color,
      type: noteContent.type,
      label: noteContent.label,
    };
    noteCtx.updateItem(id, note);
  };
  const updateNotesLabel = (label) => {
    console.log(label);
    noteCtx.addLabel(label);
    const note = {
      id: id,
      title: noteContent.title,
      text: noteContent.text,
      color: noteContent.color,
      type: noteContent.type,
      label: label,
    };
    noteCtx.updateItem(id, note);
  };
  const changeTypeHandler = (type) => {
    noteCtx.unPinItem(id);
    const note = {
      id: id,
      title: noteContent.title,
      text: noteContent.text,
      color: noteContent.color,
      type: type,
      label: noteContent.label,
    };
    noteCtx.updateItem(id, note);
  };
  console.log(noteContent.label);
  return (
    <>
      {!isEditing && (
        <Card color={noteContent.color}>
          {noteContent.type !== "trash" ? (
            <div className={classes.pin}>
              <img
                src={PinIcon}
                alt="Pin note"
                className={classes.img}
                onClick={pinClickHandler}
              ></img>
            </div>
          ) : null}

          {titleAvailable && (
            <div onClick={openHandler}>
              <b>{noteContent.title}</b>
            </div>
          )}

          <div onClick={openHandler}>{noteContent.text}</div>
          {noteContent.label && noteContent.label.length > 1 ? (
            <div>
              <p className={classes.label}>{noteContent.label}</p>
            </div>
          ) : null}
          {
            <NoteOps
              deleteClickHandler={deleteClickHandler}
              updateNotesColor={updateNotesColor}
              updateNotesLabel={updateNotesLabel}
              changeTypeHandler={changeTypeHandler}
              type={noteContent.type}
            />
          }
        </Card>
      )}
      {isEditing && (
        <EditNote
          id={id}
          color={noteContent.color}
          noteContent={noteContent}
          closeHandler={closeHandler}
        />
      )}
    </>
  );
};

export default NoteItem;
