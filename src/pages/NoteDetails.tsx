import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/NoteDetails.css';
import '../styles/style.css';

interface Note {
  _id: string;
  title: string;
  content: string;
}

interface NoteDetailsProps {
  onDelete: (id: string) => void;
}

const NoteDetails: React.FC<NoteDetailsProps> = ({ onDelete }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchNote = async () => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:5000/api/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        setError("Failed to fetch the note. Please try again.");
      }
    } else {
      setError("Note ID is undefined.");
    }
  };

  const handleDelete = async () => {
    if (id) {
      try {
        await axios.delete(`http://localhost:5000/api/notes/${id}`);
        onDelete(id);
        navigate("/");
      } catch (error) {
        console.error("Error deleting note:", error);
        setError("Failed to delete the note. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!note) return <div>Loading...</div>;

  return (
    <div className="note-details">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="button-group">
        <button onClick={() => navigate(`/notes/edit/${id}`)}>
          <i className="fas fa-edit"></i> Edit Note
        </button>
        <button onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i> Delete Note
        </button>
      </div>
    </div>
  );
};

export default NoteDetails;
