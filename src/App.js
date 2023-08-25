import React, { useState } from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import "./App.css";


const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} /> 
      {
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              title={noteItem.title}
              content={noteItem.content}
              deleteNote={deleteNote}
              id={index}
            />
          );
        })
      }
    </div>
  );
}

export default App;
