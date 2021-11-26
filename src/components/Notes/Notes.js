import classes from "./Notes.module.css";
import NotesList from "./NotesList";
import { useContext } from "react";
import NotesContext from "../Contexts/notes-context";
import AddNotes from "./AddNotes";
import Popup from "../UI/Popup";

const Notes = (props) => {
  const noteCtx = useContext(NotesContext);
  const notesList = noteCtx.items;
  const isPinned = noteCtx.pinnedItems.length > 0 ? true : false;
  const closePopup = () => {
    noteCtx.resetDeleted();
  };
  let unPinnedItems = noteCtx.items;
  for (const i of noteCtx.pinnedItems) {
    unPinnedItems = unPinnedItems.filter((item) => item.id !== i.id);
  }

  return (
    <div>
      <AddNotes />
      {/* {notesList.map((notes) => {
        <div>
          notes.isPinned ? <div>pinned</div> : null;
        </div>
      })}
      {notesList.map((notes) => {
        !notes.isPinned ? <div>pinned</div> : null;
      })} */}

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
};

export default Notes;
