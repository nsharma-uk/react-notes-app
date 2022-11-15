import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import HandleDeleteContext from "./UseContext/HandleDeleteContext";

const Note = ({ id, text, date }) => {
  const handleDeleteNote = useContext(HandleDeleteContext);
  return (
    <div className="note">
      <div>
        <p>{text}</p>
      </div>
      <div className="note-footer">
        <p className="note-footer-text">{date}</p>
        <RiDeleteBin6Line onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  );
};

export default Note;
