import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes }) => {
  return (
    <div className="container">
      <div className="notes-list">
        <AddNote />
        {notes.map((note, key) => (
          <Note key={key} id={note.id} text={note.text} date={note.date} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
