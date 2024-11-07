// EditNote.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/EditNote.css';

interface Note {
  _id: string;
  title: string;
  content: string;
}

const EditNote: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the note ID from the URL
  const navigate = useNavigate();
  
  const [note, setNote] = useState<Note | null>(null); // Hold the current note data
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the note data on component mount
    const fetchNote = async () => {
      try {
        const response = await axios.get<Note>(`http://localhost:5000/api/notes/${id}`);
        setNote(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching the note:", error);
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, {
        title,
        content,
      });
      navigate(`/notes/${id}`); // Navigate to the note's details page after updating
    } catch (error) {
      console.error("Error updating the note:", error);
    }
  };

  if (!note) return <p>Loading...</p>; // Show loading until the note is fetched

  return (
    <div className="edit-note">
  <h2>Edit Note</h2>
  <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
    <label>
      Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
      Content:
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
    </label>
    <button type="submit">Update Note</button>
  </form>
</div>

  );
};

export default EditNote;
