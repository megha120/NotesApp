import { useReducer } from "react";
import NotesContext from "./notes-context";

const dummyList = [
  {
    id: 1,
    title: "",
    text: "abcd",
    color: "white",
  },
  {
    id: 2,
    title: "Name",
    text: "Megha",
    color: "white",
  },
  {
    id: 3,
    title: "City",
    text: "Delhi",
    color: "white",
  },
  {
    id: 4,
    title: "Country",
    text: "This is a app for creating and storing notes. You can manage your trivial information here!",
    color: "white",
  },
];

const defaultState = {
  items: dummyList,
  pinnedItems: [],
  isDeleted: false,
};

const NotesReducer = (state, action) => {
  if (action.type === "Add") {
    console.log(state);
    let updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      pinnedItems: state.pinnedItems,
      isDeleted: false,
    };
  }
  if (action.type === "Delete") {
    let updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
      pinnedItems: state.pinnedItems,
      isDeleted: true,
    };
  }
  if (action.type === "Reset") {
    return {
      items: state.items,
      pinnedItems: state.pinnedItems,
      isDeleted: false,
    };
  }
  if (action.type === "Update") {
    let updatedItems = state.items.map((item) => {
      if (item.id === action.id) {
        return action.item;
      }
      return item;
    });
    return {
      items: updatedItems,
      pinnedItems: state.pinnedItems,
      isDeleted: false,
    };
  }
  if (action.type === "Pin") {
    let updatedItems = state.pinnedItems.concat(action.item);
    return {
      items: state.items,
      pinnedItems: updatedItems,
      isDeleted: false,
    };
  }
  if (action.type === "Unpin") {
    let updatedItems = state.pinnedItems.filter(
      (item) => item.id !== action.id
    );
    return {
      items: state.items,
      pinnedItems: updatedItems,
      isDeleted: false,
    };
  }
  return defaultState;
};

const NotesProvider = (props) => {
  const [notesState, dispatchAction] = useReducer(NotesReducer, defaultState);

  const addItemToNotes = (item) => {
    dispatchAction({
      type: "Add",
      item: item,
    });
  };

  const removeItemFromNotes = (id) => {
    dispatchAction({
      type: "Delete",
      id: id,
    });
  };

  const resetDeleted = () => {
    dispatchAction({
      type: "Reset",
    });
  };

  const updateItem = (id, item) => {
    dispatchAction({
      type: "Update",
      id: id,
      item: item,
    });
  };

  const addPinItem = (item) => {
    dispatchAction({
      type: "Pin",
      item: item,
    });
  };
  const removePinItem = (id) => {
    dispatchAction({
      type: "Unpin",
      id: id,
    });
  };
  const notesContext = {
    items: notesState.items,
    pinnedItems: notesState.pinnedItems,
    addItem: addItemToNotes,
    removeItem: removeItemFromNotes,
    pinItem: addPinItem,
    unPinItem: removePinItem,
    isDeleted: notesState.isDeleted,
    resetDeleted: resetDeleted,
    updateItem: updateItem,
  };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
