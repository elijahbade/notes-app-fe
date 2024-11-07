import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AddNoteForm from './components/AddNotes';
import NoteDetails from './pages/NoteDetails';
import EditNote from './components/EditNote';
import NoteList from './components/NoteList';
import './App.css';
// import './styles/style.css';
import SideBar from './components/SideBar';
import { HeaderProps } from './interfaces/types';

interface Note {
  id: string;  
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  // Fetch notes from the backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notes');
        const formattedNotes = response.data.map((note: any) => ({
          id: note.id || note._id,  // Mapping '_id' to 'id' if necessary
          title: note.title,
          content: note.content,
        }));
        setNotes(formattedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  // Handler to add a new note
  const handleAddNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
  };

  // Handler to delete a note
  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Main component rendering
  return (
    <Router>
      <div className="app-container">
        <SideBar /> 
        <div className="App">
          <Header title="Mega Notes"  />
          {/* <Header title="Mega Notes" onSearch={handleSearch} /> */}
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage notes={notes} />} />
              <Route path="/add" element={<AddNoteForm onAdd={handleAddNote} />} />
              <Route path="/notes/:id" element={<NoteDetails onDelete={handleDeleteNote} />} />
              <Route path="/notes/edit/:id" element={<EditNote />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
      
    </Router>
  );
};

export default App;
