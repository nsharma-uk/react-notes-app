import { RiDeleteBin6Line } from "react-icons/ri";

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      {/* <div> */}
      <p>{text}</p>
      {/* </div> */}
      <div className="note-footer">
        <p className="note-footer-text">{date}</p>
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default Note;
