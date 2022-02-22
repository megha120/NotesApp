import classes from "./Notes.module.css";
import NotesList from "./NotesList";
import { useContext } from "react";
import NotesContext from "../Contexts/notes-context";
import AddNotes from "./AddNotes";
import Popup from "../UI/Popup";
import { useParams } from "react-router";

const Notes = ({ type }) => {
  console.log(type);
  const params = useParams();
  const noteCtx = useContext(NotesContext);
  var notesList;
  if (type === "label") {
    let availableNotes = noteCtx.items.filter((item) => item.type === "normal");
    notesList = availableNotes.filter(
      (item) => item.label === params.labelName
    );
  } else {
    notesList = noteCtx.items.filter((item) => item.type === type);
  }

  const isPinned = noteCtx.pinnedItems.length > 0 ? true : false;
  const closePopup = () => {
    noteCtx.resetDeleted();
  };
  let unPinnedItems = notesList;
  for (const i of noteCtx.pinnedItems) {
    unPinnedItems = unPinnedItems.filter((item) => item.id !== i.id);
  }

  if (type === "normal") {
    return (
      <div>
        <AddNotes />
        {notesList && notesList.length > 0 ? (
          isPinned ? (
            <>
              <div className={classes.notes}>
                <h4 style={{ textAlign: "left" }}>Pinned</h4>
                <NotesList items={noteCtx.pinnedItems} />
              </div>
              {unPinnedItems.length > 0 ? (
                <div className={classes.notesOther}>
                  <h4 style={{ textAlign: "left" }}>Others</h4>
                  <NotesList items={unPinnedItems} />
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <div className={classes.notes}>
              <NotesList items={notesList} />
            </div>
          )
        ) : (
          <div className={classes.emptyNotes}>Notes you add appear here!</div>
        )}
        {noteCtx.isDeleted && <Popup onclose={closePopup} />}
      </div>
    );
  } else if (type === "archive") {
    return (
      <div>
        {notesList && notesList.length > 0 ? (
          <div className={classes.notes}>
            <NotesList items={notesList} />
          </div>
        ) : (
          <p>Your archived notes appear here!</p>
        )}
      </div>
    );
  } else if (type === "label") {
    return (
      <div>
        {notesList && notesList.length > 0 ? (
          <div className={classes.notes}>
            <NotesList items={notesList} />
          </div>
        ) : null}
      </div>
    );
  } else if (type === "trash") {
    return (
      <div>
        {notesList && notesList.length > 0 ? (
          <div className={classes.notes}>
            <NotesList items={notesList} />
          </div>
        ) : (
          <p>No notes in trash!</p>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Notes;
