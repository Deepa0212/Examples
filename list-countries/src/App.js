import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ListCountries from './ListCountries';
import TodoList from './TodoList';
import PhotoList from './PhotoList'

import InfiniteScroll from './InfiniteScroll';
import Accordion from './Accordion';
import Navbar from './Navbar';

function App() {
  return (    
    <>
    <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<ListCountries />} />
         <Route path="/todo-list" element={<TodoList />} />
         <Route path="/photo-list" element={<PhotoList />} />
         <Route path="/infinite-scroll" element={<InfiniteScroll />} />
         <Route path="/accordion" element={<Accordion />} />
       </Routes>
     </main>
   </Router>
    </>
  );
}

export default App;
