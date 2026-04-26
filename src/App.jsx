import { useState } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);

  function formHandler(e) {
    e.preventDefault();

    setNotes((prev) => {
      return [...prev, { title, desc }];
    });

    setTitle("");
    setDesc("");
  }

  function deleteNote(idx) {
    setNotes((prev) => {
      return prev.filter((_, i) => {
        return i !== idx;
      });
    });
  }
  return (
    <div className="lg:flex bg-black text-white min-w-screen">
      <Form
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        formHandler={formHandler}
      />
      <Notes notes={notes} setNotes={setNotes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;