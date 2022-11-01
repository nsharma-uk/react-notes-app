import { useState } from "react";
import { RiSave2Line } from "react-icons/ri";

const AddNote = () => {
  const [addText, setAddText] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type here to add a note"
        onChange={handleChange}
      />

      <div className="note-footer">
        <p className="note-footer-text">200 characters remaining</p>
        <RiSave2Line />
      </div>
    </div>
  );
};

export default AddNote;
