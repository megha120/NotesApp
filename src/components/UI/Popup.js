import classes from "./Popup.module.css";

const Popup = ({ onclose }) => {
  console.log("In Popup");

  return (
    <div className={classes.box}>
      Item deleted
      <span className={classes.close} onClick={onclose}>
        &times;
      </span>
    </div>
  );
};

export default Popup;
