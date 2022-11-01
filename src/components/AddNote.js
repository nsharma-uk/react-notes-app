import { useState } from "react";
import { RiSave2Line } from "react-icons/ri";

const AddNote = ({ handleAddNote }) => {
  const [addText, setAddText] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setAddText(e.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(addText);
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type here to add a note..."
        value={addText}
        onChange={handleChange}
      />

      <div className="note-footer">
        <p className="note-footer-text">200 characters remaining</p>
        <RiSave2Line onClick={handleSaveClick} />
      </div>
    </div>
  );
};

export default AddNote;
