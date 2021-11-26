import classes from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.clickHandler}></div>;
};

const Overlay = (props) => {
  return (
    <div style={{ backgroundColor: props.color }} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop clickHandler={props.clickHandler} />
      <Overlay color={props.color}>{props.children}</Overlay>
    </Fragment>
  );
};

export default Modal;
