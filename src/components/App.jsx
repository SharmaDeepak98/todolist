import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItems, setNoteItems] = useState([]);
  function addNote(inputText) {
    setNoteItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteNote(id) {
    setNoteItems((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteItems.map((p, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={p.title}
            content={p.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
