import classes from "./NoteOps.module.css";
import ArchiveIcon from "../../assets/archive-icon.svg";
import UnArchiveIcon from "../../assets/unarchive-icon.svg";
import ColorIcon from "../../assets/color-icon.svg";
import AddIcon from "../../assets/add-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import RestoreIcon from "../../assets/restore-icon.svg";
import DeleteForeverIcon from "../../assets/delete-forever-icon.svg";
import { useState, useRef } from "react";

const NoteOps = (props) => {
  const [colorPicker, setColorPicker] = useState(false);
  const [editLabel, enableEditLabel] = useState(false);
  const labelRef = useRef();
  const colourPaletteHandler = () => {
    if (colorPicker) {
      setColorPicker(false);
    } else {
      setColorPicker(true);
    }
  };
  const editLabelHandler = () => {
    if (editLabel) {
      enableEditLabel(false);
    } else {
      enableEditLabel(true);
    }
  };
  const updateColorHandler = (color) => {
    setColorPicker(false);
    props.updateNotesColor(color);
  };
  const addLabelHandler = (event) => {
    console.log(labelRef.current.value);
    props.updateNotesLabel(labelRef.current.value);
    enableEditLabel(false);
  };
  return (
    <div className={classes.div}>
      {colorPicker ? (
        <div className={classes.colorBox}>
          <button
            className={classes.button}
            style={{ backgroundColor: "white" }}
            onClick={() => updateColorHandler("white")}
          ></button>
          <button
            className={classes.button}
            style={{ backgroundColor: "#c38787" }}
            onClick={() => updateColorHandler("#c38787")}
          ></button>
          <button
            className={classes.button}
            style={{ backgroundColor: "#e1e1a0" }}
            onClick={() => updateColorHandler("#e1e1a0")}
          ></button>
          <button
            className={classes.button}
            style={{ backgroundColor: "rgb(217 217 233)" }}
            onClick={() => updateColorHandler("rgb(217 217 233)")}
          ></button>
          <button
            className={classes.button}
            style={{ backgroundColor: "#97c997" }}
            onClick={() => updateColorHandler("#97c997")}
          ></button>
          <button
            className={classes.button}
            style={{ backgroundColor: "#fdcfe8" }}
            onClick={() => updateColorHandler("#fdcfe8")}
          ></button>
        </div>
      ) : null}
      {editLabel ? (
        <div className={classes.labelBox}>
          <form>
            <div>
              Label Note
              {/* </div>
            <div> */}
              <input
                className={classes.input}
                type="text"
                id="labelName"
                name="labelName"
                ref={labelRef}
                placeholder="Enter label name"
              />
            </div>
            <div>
              <button
                className={classes.inputButton}
                type="button"
                onClick={addLabelHandler}
              >
                Add label
              </button>
            </div>
          </form>
        </div>
      ) : null}
      {props.type !== "trash" ? (
        <>
          <img
            src={AddIcon}
            alt="Add label"
            title="Add label"
            className={classes.img}
            onClick={editLabelHandler}
          ></img>
          {props.type === "normal" ? (
            <img
              src={ArchiveIcon}
              alt="Archive note"
              title="Archive note"
              className={classes.img}
              onClick={() => props.changeTypeHandler("archive")}
            ></img>
          ) : (
            <img
              src={UnArchiveIcon}
              alt="Unarchive note"
              title="Unarchive note"
              className={classes.img}
              onClick={() => props.changeTypeHandler("normal")}
            ></img>
          )}

          <img
            src={ColorIcon}
            alt="Color note"
            title="Color note"
            className={classes.img}
            onClick={colourPaletteHandler}
          ></img>
          <img
            src={DeleteIcon}
            alt="Delete note"
            title="Delete note"
            className={classes.img}
            onClick={() => props.changeTypeHandler("trash")}
          ></img>
        </>
      ) : (
        <>
          <img
            src={DeleteForeverIcon}
            alt="Delete note forever"
            title="Delete note forever"
            className={classes.img}
            onClick={props.deleteClickHandler}
          ></img>
          <img
            src={RestoreIcon}
            alt="Restore note"
            title="Restore note"
            className={classes.img}
            onClick={() => props.changeTypeHandler("normal")}
          ></img>
        </>
      )}
    </div>
  );
};

export default NoteOps;
