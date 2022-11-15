import { useState } from "react";

import { v4 as uuid } from "uuid";

import NotesList from "./components/NotesList";
import HandleAddContext from "./components/UseContext/HandleAddContext";
import HandleDeleteContext from "./components/UseContext/HandleDeleteContext";

const genSmallID = () => {
  return uuid().slice(0, 8);
};

const initialState = [
  {
    id: genSmallID(),
    text: "This is the first note",
    date: "12/10/22022",
  },
  {
    id: genSmallID(),
    text: "This is the 2nd note",
    date: "15/10/22022",
  },
  {
    id: genSmallID(),
    text: "This is the 3rd note",
    date: "16/10/22022",
  },
  {
    id: genSmallID(),
    text: "This is the 4th note",
    date: "30/10/22022",
  },
];

export const App = () => {
  const [notes, setNotes] = useState(initialState);

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

  const deleteNote = (id) => {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    console.log(newNotesArray);
  };

  return (
    <HandleAddContext.Provider value={addHandleNote}>
      <HandleDeleteContext.Provider value={deleteNote}>
        <NotesList notes={notes} handleDeleteNote={deleteNote} />
      </HandleDeleteContext.Provider>
    </HandleAddContext.Provider>
  );
};

export default App;
