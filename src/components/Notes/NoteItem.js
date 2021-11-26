import Card from "../UI/Card";
import DeleteIcon from "../../assets/delete-icon.svg";
import PinIcon from "../../assets/pin-icon.svg";
import ColorIcon from "../../assets/color-icon.svg";
import classes from "./NoteItem.module.css";
import { useContext, useState } from "react";
import NotesContext from "../Contexts/notes-context";
import EditNote from "./EditNote";

const NoteItem = ({ id, noteContent }) => {
  const noteCtx = useContext(NotesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
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
      noteCtx.pinItem(noteContent);
    }
  };
  const closeHandler = () => {
    setIsEditing(false);
  };

  const openHandler = () => {
    setIsEditing(true);
  };

  const colourPaletteHandler = () => {
    setIsEditing(false);
    if (colorPicker) {
      setColorPicker(false);
    } else {
      setColorPicker(true);
    }
  };

  const updateNotesColor = (color) => {
    setColorPicker(false);
    console.log(color);
    const note = {
      id: id,
      title: noteContent.title,
      text: noteContent.text,
      color: color,
    };
    noteCtx.updateItem(id, note);
  };
  return (
    <>
      {!isEditing && (
        <Card color={noteContent.color}>
          <div className={classes.pin}>
            <img
              src={PinIcon}
              alt="Pin note"
              className={classes.img}
              onClick={pinClickHandler}
            ></img>
          </div>
          {titleAvailable && (
            <div onClick={openHandler}>
              <b>{noteContent.title}</b>
            </div>
          )}
          {colorPicker ? (
            <div className={classes.colorBox}>
              <button
                className={classes.button}
                style={{ backgroundColor: "white" }}
                onClick={() => updateNotesColor("white")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#c38787" }}
                onClick={() => updateNotesColor("#c38787")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#e1e1a0" }}
                onClick={() => updateNotesColor("#e1e1a0")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "rgb(217 217 233)" }}
                onClick={() => updateNotesColor("rgb(217 217 233)")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#97c997" }}
                onClick={() => updateNotesColor("#97c997")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#fdcfe8" }}
                onClick={() => updateNotesColor("#fdcfe8")}
              ></button>
            </div>
          ) : (
            <></>
          )}
          <div onClick={openHandler}>{noteContent.text}</div>
          <div className={classes.div}>
            <img
              src={ColorIcon}
              alt="Color note"
              className={classes.img}
              onClick={colourPaletteHandler}
            ></img>
            <img
              src={DeleteIcon}
              alt="Delete note"
              className={classes.img}
              onClick={deleteClickHandler}
            ></img>
          </div>
          {/* {colorPicker ? (
            <div className={classes.colorBox}>
              <button
                className={classes.button}
                style={{ backgroundColor: "white" }}
                onClick={() => updateNotesColor("white")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#c38787" }}
                onClick={() => updateNotesColor("#c38787")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#e1e1a0" }}
                onClick={() => updateNotesColor("#e1e1a0")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "rgb(217 217 233)" }}
                onClick={() => updateNotesColor("rgb(217 217 233)")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#97c997" }}
                onClick={() => updateNotesColor("#97c997")}
              ></button>
              <button
                className={classes.button}
                style={{ backgroundColor: "#fdcfe8" }}
                onClick={() => updateNotesColor("#fdcfe8")}
              ></button>
            </div>
          ) : (
            <></>
          )} */}
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
