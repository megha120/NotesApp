import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NotesContext from "../Contexts/notes-context";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const noteCtx = useContext(NotesContext);
  return (
    <div className={classes.navbar}>
      {/* this is NavBar! */}
      <div className={classes.navbtns}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.navbtnselected : classes.navbtn
          }
          to="/notes"
        >
          Notes
        </NavLink>
      </div>
      {noteCtx.labels.length > 0 ? (
        <>
          {noteCtx.labels.map((label) => (
            <div className={classes.navbtns}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.navbtnselected : classes.navbtn
                }
                to={"/label/" + label}
              >
                {label}
              </NavLink>
            </div>
          ))}
        </>
      ) : null}
      <div className={classes.navbtns}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.navbtnselected : classes.navbtn
          }
          to="/archive"
        >
          Archive
        </NavLink>
      </div>
      <div className={classes.navbtns}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.navbtnselected : classes.navbtn
          }
          to="/trash"
        >
          Trash
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
