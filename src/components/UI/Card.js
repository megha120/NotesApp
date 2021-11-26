import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={classes.card}
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
