import { Fragment } from "react/cjs/react.production.min";
import Modal from "../UI/Modal";
import { useContext } from "react";
import classes from "./EditNote.module.css";
import NotesContext from "../Contexts/notes-context";

const EditNote = ({ id, noteContent, closeHandler, color }) => {
  const noteCtx = useContext(NotesContext);
  const updateTitle = (event) => {
    const note = {
      id: id,
      title: event.target.value,
      text: noteContent.text,
      color: noteContent.color,
    };
    noteCtx.updateItem(id, note);
  };
  const updateText = (event) => {
    const note = {
      id: id,
      title: noteContent.title,
      text: event.target.value,
      color: noteContent.color,
    };
    noteCtx.updateItem(id, note);
  };
  return (
    <Fragment>
      <Modal clickHandler={closeHandler} color={color}>
        <form>
          <div>
            <input
              className={classes.input}
              type="text"
              style={{ fontWeight: "bold", backgroundColor: color }}
              id="title"
              name="title"
              value={noteContent.title}
              onChange={updateTitle}
              placeholder="Title"
            />
          </div>
          <div>
            <input
              className={classes.text}
              style={{ backgroundColor: color }}
              type="text"
              id="text"
              name="text"
              value={noteContent.text}
              onChange={updateText}
              placeholder="Take a note..."
            />
          </div>
          <div style={{ backgroundColor: color }}>
            <button
              className={classes.button}
              type="button"
              onClick={closeHandler}
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditNote;
