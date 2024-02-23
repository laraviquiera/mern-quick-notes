import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getNotes, addNote } from '../../utilities/notes-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchNotes = async () => {
        const fetchedNotes = await getNotes();
        setNotes(fetchedNotes);
      };
      fetchNotes();
    }
  }, [user]);

  async function handleAddNote(newNote) {
    const note = await addNote(newNote);
    setNotes([...notes, note]);
  }


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/" element={<NotesPage notes={notes} />} />
              <Route path="/notes/new" element={<NewNoteForm handleAddNote={handleAddNote} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
