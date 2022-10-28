import { RiDeleteBin6Line } from "react-icons/ri";

const Note = () => {
  return (
    <div className="note">
      <div>
        <p>Hello this is a new note</p>
      </div>
      <div className="note-footer">
        <p>28/10/2022</p>
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default Note;
