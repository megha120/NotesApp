import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      {/* this is NavBar! */}
      <div className={classes.navbtns}>
        <button className={classes.navbtnselected}>Notes</button>
      </div>
      <div className={classes.navbtns}>
        <button className={classes.navbtn}>Archive</button>
      </div>
      <div className={classes.navbtns}>
        <button className={classes.navbtn}>Trash</button>
      </div>
    </div>
  );
};

export default NavBar;
