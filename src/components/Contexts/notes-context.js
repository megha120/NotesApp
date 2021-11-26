import React from "react";

const NotesContext = React.createContext({
  items: [],
  pinnedItems: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  pinItem: (item) => {},
  unPinItem: (item) => {},
  isDeleted: false,
  resetDeleted: () => {},
  updateItem: () => {},
});

export default NotesContext;
