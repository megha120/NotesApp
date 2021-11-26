import { useContext, useState, useRef } from "react";
import NotesContext from "../Contexts/notes-context";
import classes from "./AddNotes.module.css";

const AddNotes = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const notesCtx = useContext(NotesContext);
  const formClickHandler = (event) => {
    console.log("I am clicked");
    setIsActive(true);
  };

  const closeHandler = () => {
    setIsActive(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const text = textRef.current.value;
    const note = {
      id: Math.random(),
      title: title,
      text: text,
      color: "white",
    };
    notesCtx.addItem(note);
    titleRef.current.value = "";
    textRef.current.value = "";
    closeHandler();
  };

  if (!isActive) {
    return (
      <form className={classes.form} onClick={formClickHandler}>
        <input
          className={classes.input}
          type="text"
          id="note"
          name="note"
          placeholder="Take a note..."
        />
      </form>
    );
  }
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div>
        <input
          className={classes.input}
          type="text"
          style={{ fontWeight: "bold" }}
          id="title"
          name="title"
          ref={titleRef}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          className={classes.text}
          type="text"
          id="text"
          name="text"
          ref={textRef}
          placeholder="Take a note..."
        />
      </div>
      <div>
        <button className={classes.addbutton}>Add</button>
        <button className={classes.button} type="button" onClick={closeHandler}>
          Close
        </button>
      </div>
    </form>
  );
};

export default AddNotes;
