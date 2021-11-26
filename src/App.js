import './App.css';
import Notes from './components/Notes/Notes';
import Header from './components/Layout/Header';
import NavBar from './components/Layout/NavBar';
import NotesProvider from './components/Contexts/NotesProvider';


function App() {

  return (
    <NotesProvider>
    <div className="App">
      <Header />
      <NavBar />
        <Notes />
      </div>
      </NotesProvider>
  );
}

export default App;
