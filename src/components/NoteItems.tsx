// NoteItems.tsx
import React from 'react';
import './NoteItems.css';

interface NoteProps {
  title: string;
  content: string;
  date: string;
}

const NoteItems: React.FC<NoteProps> = ({ title, content, date }) => {
  return (
    <div className="note-card">
      <h3 className="note-title">{title}</h3>
      <p className="note-content">{content}</p>
      <p className="note-date">Last updated: {date}</p>
    </div>
  );
};

export default NoteItems;
