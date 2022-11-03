import { useState } from "react";
import { v4 as uuid } from "uuid";

import NotesList from "./components/NotesList";
import HandleAddContext from "./components/UseContext/HandleAddContext";

const unique_id = uuid();
const small_id = unique_id.slice(0, 8);

export const App = () => {
  const [notes, setNote] = useState([
    {
      id: small_id,
      text: "This is the first note",
      date: "12/10/22022",
    },
    {
      id: small_id,
      text: "This is the 2nd note",
      date: "15/10/22022",
    },
    {
      id: small_id,
      text: "This is the 3rd note",
      date: "16/10/22022",
    },
    {
      id: small_id,
      text: "This is the 4th note",
      date: "30/10/22022",
    },
  ]);

  const addHandleNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: small_id,
      text: text,
      date: date.toLocaleDateString(),
    };

    console.log(newNote);
    const newNotes = [...notes, newNote];
    setNote(newNotes);
  };

  return (
    <HandleAddContext.Provider value={addHandleNote}>
      <div className="container">
        <NotesList notes={notes} />
      </div>
    </HandleAddContext.Provider>
  );
};

export default App;
