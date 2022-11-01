import { RiSave2Line } from "react-icons/ri";

const AddNote = () => {
  return (
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Type here to add a note" />

      <div className="note-footer">
        <p className="note-footer-text">200 characters remaining</p>
        <RiSave2Line />
      </div>
    </div>
  );
};

export default AddNote;
