import React, { useState } from "react";
import ProgressBar from "./Progress";
const UploadForm = () => {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setfile(selected);
      seterror("");
    } else {
      setfile(null);
      seterror("Please select the image file(jpg or png)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setfile={setfile} />}
      </div>
    </form>
  );
};

export default UploadForm;
