import { getNotes, addNote } from '../../utilities/notes-api';
import { useState, useEffect } from 'react';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import './NotesPage.css'

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    async function getAllNotes() {
      const data = await getNotes()
      setNotes(data);
    };
    getAllNotes();
  }, []);

  const handleAddNote = async (newNote) => {
    try {
      const addedNote = await addNote(newNote);
      setNotes([...notes, addedNote]);
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  return (
    <>
      <h1>All Notes ✍🏼 </h1>
      <NewNoteForm handleAddNote={handleAddNote} />
      {notes.length === 0 && <p>No Notes Yet!</p>}
      {notes.length > 0 && (
         <ul>
         {notes.map((note) => (
           <li className='list' key={note._id}>
             ⭐ {note.text} - {new Date(note.createdAt).toLocaleString()}
           </li>
         ))}
       </ul>
      )}
    </>
  );
}
