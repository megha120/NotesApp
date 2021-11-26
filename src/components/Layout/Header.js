import classes from "./Header.module.css";
import NotesIcon from "../../assets/notes-icon.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={NotesIcon} alt="Notes" className={classes.notesIcon} />
      &nbsp; &nbsp; This is your notes App!
    </div>
  );
};

export default Header;
