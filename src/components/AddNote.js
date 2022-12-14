import { useState, useContext } from "react";
import { RiSave2Line } from "react-icons/ri";

import HandleAddContext from "./UseContext/HandleAddContext";

const AddNote = () => {
  const handleAddNote = useContext(HandleAddContext);

  const [addText, setAddText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const characterLimit = 300;

  //handle text input
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length < 1) {
      setIsDisabled(true);
      console.log(setIsDisabled);
    } else {
      setIsDisabled(false);
      console.log(e.target.value);
      setAddText(e.target.value);
    }
  };

  //handle save & error
  const handleSaveClick = () => {
    if (addText.trim().length > 0) {
      handleAddNote(addText);
      setAddText("");
    }
  };

  return (
    <form className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type here to add a note..."
        value={addText}
        onChange={handleChange}
      />

      <div className="note-footer">
        <p className="note-footer-text">
          {characterLimit - addText.length} characters remaining
        </p>
        <RiSave2Line
          onClick={handleSaveClick}
          id="button"
          type="submit"
          disabled={isDisabled}
          className={`${isDisabled && "disabled"} ? '' : 'save'}`}
          size="1.3rem"
        />
      </div>
    </form>
  );
};

export default AddNote;
