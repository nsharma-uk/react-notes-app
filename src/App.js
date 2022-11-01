import { useState } from "react";
import { v5 as uuid } from "uuid";

import NotesList from "./components/NotesList";

export const App = () => {
  const [notes, setNote] = useState([
    {
      // id: uuid(),
      text: "This is the first note",
      date: "12/10/22022",
    },
    {
      // id: uuid(),
      text: "This is the 2nd note",
      date: "15/10/22022",
    },
    {
      // id: uuid(),
      text: "This is the 3rd note",
      date: "16/10/22022",
    },
    {
      // id: uuid(),
      text: "This is the 4th note",
      date: "30/10/22022",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
