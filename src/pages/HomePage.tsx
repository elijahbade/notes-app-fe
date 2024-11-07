import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';


const HomePage: React.FC<{ notes: { id?: string; title?: string; content?: string; }[] }> = ({ notes }) => {
  return (
    <div className="homepage">
      <h2>Here Are Your Notes</h2>
      {notes.length > 0 ? (
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <Link to={`/notes/${note.id}`}>
                <h3>{note.title}</h3>
              </Link>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-notes-message">No notes available.</p>
      )}
    </div>
  );
};

export default HomePage;
