import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EditNote.css';
import '../styles/style.css'



interface AddNoteFormProps {
  onAdd: (newNote: any) => void;
}

const AddNoteForm: React.FC<AddNoteFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/notes', { title, content });
      onAdd(response.data);
      setTitle(''); 
      setContent(''); 
    } catch (error) {
      console.error("Error adding note", error);
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit" className="save-btn">Save</button>
    </form>
  );
};

export default AddNoteForm;
