import { useState } from "react";
import './NewNoteForm.css'

export default function NewNoteForm({ handleAddNote }) {
    const [newNote, setNewNote] = useState({ text: '' });

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddNote(newNote);
        setNewNote({ text: '' });
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewNote({ ...newNote, [name]: value });
    }

    return (
        <form className="new-note" onSubmit={handleSubmit}>
            <input 
                name="text"
                value={newNote.text}
                onChange={handleChange}
                placeholder="add new note"
                required
            />
            &nbsp;&nbsp;
            <button type="submit" className="add-note">Add Note</button>
        </form>
    );
}
