import React from "react";

const NotesContext = React.createContext({
  items: [],
  pinnedItems: [],
  labels: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  pinItem: (item) => {},
  unPinItem: (item) => {},
  isDeleted: false,
  resetDeleted: () => {},
  updateItem: () => {},
  addLabel: () => {},
});

export default NotesContext;
