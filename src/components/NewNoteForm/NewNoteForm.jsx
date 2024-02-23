import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input 
                name="text"
                value={newNote.text}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Note</button>
        </form>
    );
}
