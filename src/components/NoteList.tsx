// import React from "react";
// import { Link } from "react-router-dom";

// const NoteList: React.FC<{notes: any[]}> = ({notes}) => {
//     return (
//         <div className="note-list">
//             {notes.map((note) => (
//                 <div className="note-card" key={note.id}>
//                     <h3>{note.title}</h3>
//                     <p>{note.content.substring(0,100)}...</p>
//                     <Link to = {`/note/note/${note.id}`} className="view-btn">View Details</Link>
                  
//                 </div>
//             ))}
//         </div>
//     );
// };

import React from "react";
import { Link } from "react-router-dom";

interface Note {
  id: string; // Adjust the type based on your note structure
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div className="note-card" key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content.substring(0, 100)}...</p>
                    <Link to={`/note/note/${note.id}`} className="view-btn">View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
