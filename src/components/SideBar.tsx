import React from 'react';
import { FaBook, FaStar, FaArchive, FaTrash, FaPlus } from 'react-icons/fa';
import '../styles/SideBar.css';


const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
    <li>  <a href="/" className="sidebar-link"> <FaBook className="sidebar-icon" /> All Notes </a> </li>  
    <li>  <a href="/add" className="sidebar-link"> <FaPlus className="sidebar-icon" /> Create New Note </a> </li>        
    <li><FaStar className="sidebar-icon" /> Favorites</li>
        <li><FaArchive className="sidebar-icon" /> Archived</li>
        <li><FaTrash className="sidebar-icon" /> Trash</li>
      </ul>
    </aside>
  );
};

export default SideBar;
