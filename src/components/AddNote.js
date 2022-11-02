import { useState } from "react";
import { RiSave2Line } from "react-icons/ri";

const AddNote = ({ handleAddNote }) => {
  const [addText, setAddText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const characterLimit = 300;

  //handle text input
  const handleChange = (e) => {
    console.log(e.target.value);
    setAddText(e.target.value);
  };

  //handle save
  const handleSaveClick = () => {
    if (addText.trim().length > 0) {
      handleAddNote(addText);
      setAddText("");
    } else {
      setErrorMsg("Please type something to save your note");
      console.log(setErrorMsg);
    }
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
        <p className="note-footer-text">
          {characterLimit - addText.length} remaining
        </p>
        <RiSave2Line onClick={handleSaveClick} />
        {errorMsg && <p className="error"> {errorMsg} </p>}
      </div>
    </div>
  );
};

export default AddNote;
