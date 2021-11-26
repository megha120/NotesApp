import NoteItem from "./NoteItem";
// import classes from "./NotesList.module.css";

const NotesList = (props) => {
  const notesList = props.items;
  return (
    <div>
      {notesList.map((note) => (
        <NoteItem key={note.id} id={note.id} noteContent={note} />
      ))}
    </div>
  );
};

export default NotesList;
