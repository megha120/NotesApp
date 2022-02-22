import "./App.css";
import Notes from "./components/Notes/Notes";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import NotesProvider from "./components/Contexts/NotesProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Notes type={"normal"} />} />
          <Route path="/Notes" element={<Notes type={"normal"} />} />
          <Route path="/label/:labelName" element={<Notes type={"label"} />} />
          <Route path="/Trash" element={<Notes type={"trash"} />} />
          <Route path="/archive" element={<Notes type={"archive"} />} />
          <Route path="*" element={<p> 404 Page not found </p>} />
        </Routes>
      </div>
    </NotesProvider>
  );
}

export default App;
