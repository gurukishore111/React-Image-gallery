import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UplodForm";
import ImageGrid from "./comps/Imagegrid";
import Modals from "./comps/Model";

function App() {
  const [selectedImg, setSelected] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelected={setSelected} />
      {selectedImg && (
        <Modals selectedImg={selectedImg} setSelected={setSelected} />
      )}
    </div>
  );
}

export default App;
