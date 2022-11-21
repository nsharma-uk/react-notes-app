import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import NotesList from "./components/NotesList";
import HandleAddContext from "./components/UseContext/HandleAddContext";
import HandleDeleteContext from "./components/UseContext/HandleDeleteContext";
import { Header } from "./components/Header";

const genSmallID = () => {
  return uuid().slice(0, 8);
};

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  //add notes
  const addHandleNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: genSmallID(),
      text: text,
      date: date.toLocaleDateString(),
    };

    console.log(newNote);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // delete notes
  const deleteNote = (id) => {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    console.log(newNotesArray);
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className={`${isDarkMode && "dark-mode"}`}
    >
      <HandleAddContext.Provider value={addHandleNote}>
        <HandleDeleteContext.Provider value={deleteNote}>
          <Header handleDarkMode={setIsDarkMode} />
          <NotesList notes={notes} />
        </HandleDeleteContext.Provider>
      </HandleAddContext.Provider>
    </div>
  );
};

export default App;
